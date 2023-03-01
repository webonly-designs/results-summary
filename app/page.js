import Image from 'next/image'

export default function Home() {
  return (
   <main className='flex items-center justify-center h-screen lg:max-w-2xl lg:mx-auto'>

    <div className='flex flex-col lg:flex-row shadow-lg rounded-3xl flex-1 m-5'>

      <div className='lg:w-1/2 p-10 bg-gradient-to-b from-violet-600 to-blue-700 flex flex-col space-y-7 justify-center items-center rounded-3xl'>

        <p className='text-gray-400 text-lg font-semibold'>Your Result</p>
        <div className='text-center w-44 h-44 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800/30 to-blue-700/5 rounded-full'>
          <p className='text-white text-6xl font-bold mb-1'>76</p>
          <p className='text-gray-400 text-sm'>of 100</p>
        </div>
        <div className='text-center'>
          <p className='text-white text-2xl mb-2'>Great</p>
          <p className='text-gray-400'>You scored higer than 65% of the people who have taken these tests.</p>
        </div>

      </div>
      <div className='lg:w-1/2 p-7 flex flex-col justify-center space-y-7'>

        <p className='text-lg font-semibold text-gray-700'>Summary</p>
        <div className='flex flex-col space-y-3'>

          <div className='p-3 bg-red-500/5 rounded-lg flex items-center justify-between font-medium'>
            <div className='flex gap-2 items-center'>
              <Image src='assets/images/icon-reaction.svg' width={20} height={20} />
              <p className='text-red-500'>Reaction</p>
            </div>
            <p className='text-gray-700'>80 <span className='text-gray-400'>/ 100</span></p>
          </div>

          <div className='p-3 bg-yellow-500/5 rounded-lg flex items-center justify-between font-medium'>
            <div className='flex gap-2 items-center'>
              <Image src='assets/images/icon-memory.svg' width={20} height={20} />
              <p className='text-yellow-500'>Memory</p>
            </div>
            <p className='text-gray-700'>92 <span className='text-gray-400'>/ 100</span></p>
          </div>

          <div className='p-3 bg-green-500/5 rounded-lg flex items-center justify-between font-medium'>
            <div className='flex gap-2 items-center'>
              <Image src='assets/images/icon-verbal.svg' width={20} height={20} />
              <p className='text-green-500'>Verbal</p>
            </div>
            <p className='text-gray-700'>61 <span className='text-gray-400'>/ 100</span></p>
          </div>

          <div className='p-3 bg-purple-500/5 rounded-lg flex items-center justify-between font-medium'>
            <div className='flex gap-2 items-center'>
              <Image src='assets/images/icon-visual.svg' width={20} height={20} />
              <p className='text-purple-500'>Visual</p>
            </div>
            <p className='text-gray-700'>72 <span className='text-gray-400'>/ 100</span></p>
          </div>

        </div>

        <button className='p-3 bg-gray-800 rounded-full text-white hover:bg-blue-700'>Continue</button>

      </div>

    </div>

   </main>
  )
}
