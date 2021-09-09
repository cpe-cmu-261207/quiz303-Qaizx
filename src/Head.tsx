const Head = () => {
    return(
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/My_Pro.jpg"></img>
            <span className='font-semibold text-lg'>Ronnagon Phukahuta 630610754</span>
          </div>

          {/* status message */}
          <p>Quiz ข้อสอบยาก ยังไม่ยากเท่าใจเธอ #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>99999 คน</p>
          </div>

        </div>
    )
}

export default Head