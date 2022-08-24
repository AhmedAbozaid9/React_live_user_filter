export default function filterByTerm(contact, term) {
  const contactLetters = `${contact.name.first}${contact.name.last}${contact.location.city}${contact.location.country}`.toLowerCase();
  return contactLetters.includes(term.toLowerCase())
}


