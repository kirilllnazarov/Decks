import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'
import { useFetchDesks } from './useFetchDecks'

export const DecksList = () => {
  const { decks } = useFetchDesks()

  return (
    <ul className={s.list}>
      {decks.map((el) => (
        <DeckItem deck={el} key={el.id} />
      ))}
    </ul>
  )
}
