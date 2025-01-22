import { isAxiosError } from 'axios';
import { setAppErrorAC } from '../../app/app-reducer';
import type { AppDispatch } from '../../app/store';

export function handleError(payload: { dispatch: AppDispatch; error: any }) {
  const { dispatch, error } = payload
  let errMessage: string

  if (isAxiosError<ServerError>(error)) {
    errMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errMessage = (error as Error).message
  }
  dispatch(setAppErrorAC(errMessage))
}

export type ServerError = {
  errorMessages: { field: string; message: string }[]
}
