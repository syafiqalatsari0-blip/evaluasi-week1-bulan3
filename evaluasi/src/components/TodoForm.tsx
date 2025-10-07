import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

// Properti untuk komponen TodoForm
interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setInputValue('');
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Silakan tulis tugas di sini..."
        aria-label="Masukkan tugas baru"
      />
      <button type="submit" className="add-btn">
        Tambahkan
      </button>
    </form>
  );
};

export default TodoForm;
