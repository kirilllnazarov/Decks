import { AppDispatch } from './../../app/store'
import { decksApi, type AddDecksParams } from './decks-api'
import { addDeskAC, setDecksAC } from './decks-reducer'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeskTC = (params: AddDecksParams) => (dispatch: AppDispatch) => {
  return decksApi.addDeck(params).then((res) => {
    dispatch(addDeskAC(res.data))
  })
}
