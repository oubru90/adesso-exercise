'use server'

import createUserMutation from './graphql/createUserMutation';
import { doGoRestRequest, login } from '@adesso-exercise/commons';
import { RegisterFieldType } from '../app/register/page';
import { redirect } from 'next/navigation';

export async function register(_, formData: RegisterFieldType) {
  try {
    const newUser = await doGoRestRequest(
      createUserMutation,
      {
        input: {
          ...formData,
          status: 'active'
        }
      },
      process.env.API_TOKEN);

    login(newUser);
    redirect('/');
  } catch (error) {
    throw error;
  }
}



