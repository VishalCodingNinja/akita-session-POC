const SESSION_KEY = 'session';

export function getSession() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : {};
}

export function saveSession( session ) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSesssion() {
  localStorage.removeItem(SESSION_KEY);
}