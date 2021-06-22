import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.container}>
      <FaGithub color="#04D361" />
      Isaque
      <FiX color="#737380" className={styles.closeIcon} title="sair" />
    </button>
  ) : (
    <button type="button" className={styles.container}>
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}