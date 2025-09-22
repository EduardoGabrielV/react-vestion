// Pages/Profile/index.jsx
import { useAuth } from '../../auth/AuthContext';

export default function Profile() {
  const { user } = useAuth(); // { id, name, email }

  return (
    <section>
      <h2>Meu perfil</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </section>
  );
}
