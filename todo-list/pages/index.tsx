import React, { useState } from 'react';
import Image from "next/image";
import Rocket from "@/public/assets/rocket.png";
import TaskList from '@/src/component/TaskList';

export default function Home() {
  const [taskInput, setTaskInput] = useState(''); // 입력 필드 상태 관리
  const [tasks, setTasks] = useState([
    // 초기 할 일 목록
    { id: 1, title: "Meeting With Tae Hyeong & Jun Seo", completed: false },
    { id: 2, title: "Education for Dae Hong Ham", completed: false },
    { id: 3, title: "Let's Go Gazilab~~", completed: false },
    { id: 4, title: "I had a meeting about naver's MOU", completed: true },
    { id: 5, title: "I had a birthday party for APM's Bro", completed: true }
  ]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskInput.trim() === '') return; // 빈 입력 방지
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]); // 새로운 할 일 추가
    setTaskInput(''); // 입력 필드 초기화
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background: "linear-gradient(to bottom, #0d0d0d 200px, #1a1a1a 0)",
        height: "1024px",
      }}
    >
      {/* Header Section */}
      <div className="flex items-center gap-[12px]" style={{ marginTop: "72px" }}>
        <div className="h-[36px] w-[22px]">
          <Image src={Rocket} alt="This is Rocket Image" width={22} height={36} />
        </div>
        <div className="font-[Inter] font-black text-[40px] flex items-center">
          <span style={{ color: "#4EA8DE" }}>To</span>
          <span style={{ color: "#5E60CE", marginLeft: "12px" }}>Do</span>
        </div>
      </div>

      {/* Task Input Section */}
      <form className="flex z-10 flex-wrap gap-2 items-center mt-10 max-w-full leading-snug w-[736px]" onSubmit={handleAddTask}>
        <label htmlFor="taskInput" className="sr-only">Enter about your tasks</label>
        <input
          id="taskInput"
          type="text"
          placeholder="enter about your tasks: TODO"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // 입력 필드 상태 업데이트
          className="flex-1 shrink gap-2 self-stretch p-4 my-auto text-base rounded-lg border border-solid bg-neutral-800 border-stone-950 min-w-[240px] text-zinc-500 max-md:max-w-full"
        />
        <button type="submit" className="flex gap-2 justify-center items-center self-stretch p-4 my-auto text-sm font-bold whitespace-nowrap bg-cyan-700 rounded-lg text-zinc-100">
          <span className="self-stretch my-auto">Create</span>
        </button>
      </form>

      {/* Task List Section */}
      <TaskList tasks={tasks} setTasks={setTasks} /> {/* TaskList 컴포넌트에 상태 전달 */}
    </div>
  );
}
