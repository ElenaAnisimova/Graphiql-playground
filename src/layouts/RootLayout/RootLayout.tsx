import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <div>Header</div>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  );
}
