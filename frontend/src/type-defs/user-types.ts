import { UserInfo } from 'firebase/auth';

export interface ElectioUser {
  electeros: string;
  providerId: string;
  emailVerified: boolean;
  providerData: UserInfo[] | (UserInfo | null)[];
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  refreshToken: string;
  credential?: string | null | undefined;
  isAnonymous?: boolean;
}
