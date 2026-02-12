import BookCard from "./BookCard";

const Personal = () => {
  const books = [
    {
      id: 1,
      title: "The 48 Laws of Power",
      author: "Robert Greene",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg",
      reads: "Read Twice (2022, 2024)",
      status: "Completed",
      description:
        "This book reshaped how I observe power, strategy, and human behavior in real life. It changed how I analyze leadership and ambition.",
      keyTakeaway:
        "Power is rooted in psychology, perception, and strategic patience.",
      favorite: "Law 3 — Conceal Your Intentions",
    },
    {
      id: 2,
      title: "Bhagavad Gita As It Is",
      author: "A.C. Bhaktivedanta Swami Prabhupada",
      image: "https://iskconbhiwandi.org/images/bhagavad-gita/bhagvad-gita.jpg",
      reads: "Read Once (Reflecting)",
      status: "Revisiting",
      description:
        "More than philosophy, this book feels like timeless guidance on discipline, action, and detachment from outcomes.",
      keyTakeaway:
        "To win all over the world first win you mind, it can be worst enemy or best tool. You are not the body nor the mind, what ever there is in your head is just a thought a mere thought.",
      favorite: "Karma Yoga",
    },
    {
      id: 3,
      title: "Flow",
      author: "Mihaly Csikszentmihalyi",
      image: "https://images.thenile.io/r1000/9780061339202.jpg",
      reads: "Read Once (2023)",
      status: "Completed",
      description:
        "A deep exploration of optimal experience and how true happiness comes from immersion in meaningful work.",
      keyTakeaway: "Happiness is achieved when challenge meets skill.",
      favorite: "The Flow State Framework",
    },
  ];

  return (
    <section className="flex flex-col items-center border-t border-zinc-800 bg-linear-to-b  py-20">
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white mb-20">
          Books I Read a Lot
        </h1>

        <div className="flex flex-col gap-16">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-zinc-500 text-sm uppercase tracking-widest">
            Reading a lot
          </p>

          <h3 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-white">
            There are many more, but these are the best.
          </h3>

          <p className="mt-3 text-zinc-400 text-sm">
            Currently finishing one book every month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personal;
