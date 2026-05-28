import { useApp } from "./context/useApp";
import { UserDashboard } from "./modules/user/UserDashboard";
import { ManagerDashboard } from "./modules/manager/ManagerDashboard";
import { ThemeToggler } from "./components/ThemeToggler";
import { LanguageToggler } from "./components/LanguageToggler";

function App() {
  const { role, changeRole } = useApp();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mini Request System</h1>

        <ThemeToggler />
        <LanguageToggler />

        <div className="role-selector">
          <span>
            Current role: <strong>{role}</strong>
          </span>
          <button
            onClick={() => changeRole(role === "user" ? "manager" : "user")}
            className="btn-toggle-role"
          >
            Switch to {role === "user" ? "Manager" : "User"}
          </button>
        </div>
      </header>

      <main className="app-content">
        {role === "user" ? <UserDashboard /> : <ManagerDashboard />}
      </main>
    </div>
  );
}

export default App;
