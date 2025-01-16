import type { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return {
        ...state,
        decks: action.decks,
      }
    case 'ADD_DECKS':
      return { ...state, decks: [action.deck, ...state.decks] }
    default:
      return state
  }
}

// Action Creators
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'SET_DECKS',
    decks,
  } as const
}

export const addDeskAC = (deck: Deck) => {
  return {
    type: 'ADD_DECKS',
    deck,
  } as const
}

// Action Types
type DecksState = typeof initialState
type SetDecksAT = ReturnType<typeof setDecksAC>
type AddDecksAT = ReturnType<typeof addDeskAC>

// Universal type
type DecksActions = SetDecksAT | AddDecksAT
