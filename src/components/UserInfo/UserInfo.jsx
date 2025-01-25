import './Userinfo.scss';

export const UserInfo = ({ todo }) => (
  <a className="UserInfo" href={`mailto:${todo.user.email}`}>
    {todo.user.name}
  </a>
);
