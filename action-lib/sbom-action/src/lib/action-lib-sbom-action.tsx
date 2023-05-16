import styles from './action-lib-sbom-action.module.css';

/* eslint-disable-next-line */
export interface ActionLibSbomActionProps {}

export function ActionLibSbomAction(props: ActionLibSbomActionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ActionLibSbomAction!</h1>
    </div>
  );
}

export default ActionLibSbomAction;
