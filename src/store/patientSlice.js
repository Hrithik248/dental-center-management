import { createSlice } from '@reduxjs/toolkit'
import { getNextPatientId } from '../utils/idGen'

const initialState = {
  patients: JSON.parse(localStorage.getItem('patients')) || [],
}

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPatient(state, action) {
      const newPatient = { id: getNextPatientId(state.patients), ...action.payload }
      state.patients.push(newPatient)
    },
    updatePatient(state, action) {
      const index = state.patients.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.patients[index] = action.payload
      }
    },
    deletePatient(state, action) {
      state.patients = state.patients.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addPatient, updatePatient, deletePatient } = patientSlice.actions
export default patientSlice.reducer
