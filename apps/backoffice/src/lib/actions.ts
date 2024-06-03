'use server';

import { login, logout } from "@adesso-exercise/commons";
import { redirect } from 'next/navigation';

export async function loginUser(_: any, formData: { username: string, password: string }) {
  try {
    if (formData.username === 'admin' || formData.password === 'admin') {
      await login({
        id: 1,
        name: formData.username,
        gender: 'male',
        email: formData.username,
        status: 'active',
      });
      redirect('/');
    } else {
      throw new Error('Invalid user');
    }
  } catch (error) {
    return 'Invalid user';
  }
};

export async function logoutUser() {
  await logout();
  redirect('/');
}
