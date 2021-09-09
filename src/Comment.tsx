type CommentProps = {
    Username: string;
    UserImagePath: string;
    CommentText: string;
    LikeNum: number;
}
const Comment = ({Username, UserImagePath, CommentText, LikeNum} : CommentProps) => {
    return(
        <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={UserImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{Username}</p>
              <p>{CommentText}</p>

              <div className='flex items-center'>
                
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{LikeNum}</p>
              </div>
            </div>
          </div>
    )
}

export default Comment;