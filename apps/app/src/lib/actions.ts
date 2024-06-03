'use server'

import createUserMutation from './graphql/createUserMutation';
import { doGoRestRequest, login, logout, changeUserLanguage } from '@adesso-exercise/commons';
import { RegisterFieldType } from '../app/register/page';
import { redirect } from 'next/navigation';
import { NewPostFieldType } from '../_components/NewPostForm';
import createPostMutation from './graphql/createPostMutation';
import { LoginFieldType } from '../app/login/page';
import getUserQuery from './graphql/getUserQuery';
import deletePostMutation from './graphql/deletePostMutation';
import { EditProfileFieldType } from '../_components/EditProfileForm';
import updateUserMutation from './graphql/updateUserMutation';
import deleteUserMutation from './graphql/deleteUserMutation';

export async function loginUser(_: any, formData: LoginFieldType) {
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

export async function register(_: any, formData: RegisterFieldType) {
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

export async function createNewPost(_: any, formData: NewPostFieldType) {
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
  await logout();
  redirect('/');
}

export async function deletePost(_: any, postId: number) {
  await doGoRestRequest(
    deletePostMutation,
    {
      input: {
        id: postId
      }
    });
  redirect('/');
}

export async function deleteAccount(_: any, userId: number) {
  await doGoRestRequest(
    deleteUserMutation,
    {
      input: {
        id: userId
      }
    });
  await logout();
  redirect('/');
}

export async function editProfile(_: any, formData: EditProfileFieldType) {
  const resp = await doGoRestRequest(
    updateUserMutation,
    {
      input: {
        ...formData,
        id: parseInt(formData.id, 10)
      }
    });
  redirect('/profile');
}

export async function changeUserLocale() {
  console.log('change language');
  await changeUserLanguage();
  redirect('/');
}
