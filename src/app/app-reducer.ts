export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_LOADER':
      return { ...state, status: action.loaderValue }

    case 'SET_ERROR':
      return { ...state, error: action.error }

    default:
      return state
  }
}

export const setAppStatusAC = (loaderValue: RequestStatusType) => {
  return {
    type: 'SET_LOADER',
    loaderValue,
  } as const
}

export const setAppErrorAC = (error: string | null) => {
  return {
    type: 'SET_ERROR',
    error,
  } as const
}

type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
type SetAppErrorAT = ReturnType<typeof setAppErrorAC>

type ActionsType = SetAppStatusAT | SetAppErrorAT
