'use server'

import createUserMutation from './graphql/createUserMutation';
import { doGoRestRequest, login, logout } from '@adesso-exercise/commons';
import { RegisterFieldType } from '../app/register/page';
import { redirect } from 'next/navigation';
import { NewPostFieldType } from '../_components/NewPostForm';
import createPostMutation from './graphql/createPostMutation';
import { LoginFieldType } from '../app/login/page';
import getUserQuery from './graphql/getUserQuery';
import deletePostMutation from './graphql/deletePostMutation';

export async function loginUser(_, formData: LoginFieldType) {
  try {
    const user = await doGoRestRequest(
      getUserQuery,
      {
        id: parseInt(formData.id, 10),
      });
    if (!user?.user || user?.user?.status !== 'active') {
      throw new Error('Invalid user');
    }
    login(user.user);
    redirect('/');
  } catch (error) {
    return 'Invalid user';
  }
};

export async function register(_, formData: RegisterFieldType) {
  try {
    const newUser = await doGoRestRequest(
      createUserMutation,
      {
        input: {
          ...formData,
          status: 'active'
        }
      });

    login(newUser.createUser.user);
    redirect('/');
  } catch (error) {
    throw error;
  }
}

export async function createNewPost(_, formData: NewPostFieldType) {
  try {
    await doGoRestRequest(
      createPostMutation,
      {
        input: {
          ...formData
        }
      });
    redirect('/');
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  logout();
  redirect('/');
}

export async function deletePost(_, postId: number) {
  await doGoRestRequest(
    deletePostMutation,
    {
      input: {
        id: postId
      }
    });
  redirect('/');
}
