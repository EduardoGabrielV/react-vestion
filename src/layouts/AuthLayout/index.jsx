import AuthShell from '../../Components/AuthShell'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <main>
            <AuthShell>
                <Outlet />
            </AuthShell>
        </main>
    )
}
