import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  comments } from "../src/data/comments"
import { Comment } from '@babel/types';
import { useState } from "react";
import Head from './component/Head';
import Represent from './component/Represent';

function App() {
  // const [tasks, setTasks] = useState<TaskData[]>([]);

  console.log(comments.map(x => x.username));
  

  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <Head/>

        {/* comments section */}
        <div className="">
          {/* {comments.map((x) => <Comment Username = {x.username} UserImagePath ={x.userImagePath} CommentText = {x.commentText} LikeNum = {x.likeNum}/>)} */}
          
          {/* {render()} */}
          

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <Represent/>

        </div>

      </div>
    </div>
  );
}

export default App;
