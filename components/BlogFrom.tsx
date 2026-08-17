"use client";

import { FormEvent, useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function createSlug(value: string) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9ก-๙-]/g, "");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    setSlug(createSlug(value));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setSubmitting(true);
      setMessage("");

      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "เพิ่มหมวดหมู่ไม่สำเร็จ");
      }

      setMessage("เพิ่มหมวดหมู่สำเร็จ");
      setTitle("");
      setSlug("");
      setContent("");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "เกิดข้อผิดพลาด"
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      

      <div>
        <label >
          ชื่อหมวดหมู่
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            handleTitleChange(event.target.value)
          }
          
          required
        />
      </div>

      <div>
        

        <input
          type="text"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">
          รายละเอียด
        </label>

        <textarea
          value={content}
          onChange={(event) =>
            setContent(event.target.value)
          }
          className="min-h-28 w-full rounded-lg border px-3 py-2"
        />
      </div>

      {message && (
        <p className="rounded-lg bg-gray-100 p-3">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        
      >
        {submitting ? "กำลังบันทึก..." : "เพิ่มหมวดหมู่"}
      </button>
    </form>
  );
}