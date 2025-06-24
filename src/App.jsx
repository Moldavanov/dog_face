import { useState } from 'react'

const mockAvatar = "https://placedog.net/80?id="

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, dog: 'Шарик', breed: 'Двортерьер', text: 'Погулял у реки, нашёл палку.' },
    { id: 2, dog: 'Рекс', breed: 'Немецкая овчарка', text: 'Съел тапок. Не жалею.' },
  ])
  const [newPost, setNewPost] = useState('')
  const [dogName, setDogName] = useState('')

  const addPost = () => {
    if (!newPost.trim() || !dogName.trim()) return
    const next = {
      id: posts.length + 1,
      dog: dogName,
      breed: 'Без породы',
      text: newPost,
    }
    setPosts([next, ...posts])
    setNewPost('')
    setDogName('')
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <header className="flex justify-between items-center bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-blue-800">DogFace</h1>
        <div className="text-sm text-gray-600">Альфа-собака онлайн</div>
      </header>

      <section className="bg-white p-4 rounded shadow space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Кличка собаки"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Что гавкнуть?.."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          onClick={addPost}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Опубликовать
        </button>
      </section>

      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow flex gap-4">
          <img
            src={mockAvatar + post.id}
            alt="dog avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="font-bold">{post.dog}</div>
            <div className="text-sm text-gray-500">{post.breed}</div>
            <div className="mt-2">{post.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
