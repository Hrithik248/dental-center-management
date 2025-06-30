import { addPatient, updatePatient, deletePatient } from '../store/patientSlice';
import { login, logout } from '../store/authSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  if (action.type === login.type) {
    localStorage.setItem('user', JSON.stringify(action.payload));
  }

  if (action.type === logout.type) {
    localStorage.removeItem('user');
  }

  const patientActions = [addPatient.type, updatePatient.type, deletePatient.type];
  if (patientActions.includes(action.type)) {
    localStorage.setItem('patients', JSON.stringify(state.patients.patients)); 
  }

  return result;
};

export default localStorageMiddleware;