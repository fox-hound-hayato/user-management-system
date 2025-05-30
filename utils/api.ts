import { supabase } from './supabaseClient';
import { User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users') // テーブル名と型を2つ指定
    .select('*')
    .eq('deleted', false); // ２－１－１　2.削除済みユーザーを取得しない処理の追加

  if (error) {
    throw error;
  }
  return data as User[];
};

export const fetchUserById = async (id: number): Promise<User | null> => {
  const { data, error } = await supabase
    .from<'dev_users', User>('dev_users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') { // No rows found
      return null;
    }
    throw error;
  }

  return data as User;
};

// タスク1-1で使用する関数
export const createUser = async (user: Omit<User, 'id' | 'deleted'>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .insert(user)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const updateUser = async (id: number, user: Partial<User>): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .update(user)
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

// ２－１－１ 3.論理削除用に新規関数を追加
export const softDeleteUser = async (id: number): Promise<User> => {
  const { data, error } = await supabase
    .from('dev_users')
    .update({ deleted: true }) // 論理削除フラグを立てる
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('dev_users')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};