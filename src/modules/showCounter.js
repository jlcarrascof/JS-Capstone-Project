export default function showCounter(section) {
  const cards = section.querySelectorAll('.show-card');
  const cardCount = cards.length;
  return cardCount;
}
