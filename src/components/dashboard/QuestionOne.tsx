    import React from 'react'
    
    const QuestionOne = () => {
        const Question = [
            {
              list: {
                data: [
                  {
                    title: "What is the capital of India?",
                    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
                  },
                ],
              },
            },
          ];
          
      return (
        <div className='flex justify-center items-center bg-gray-400 container py-12 h-screen'>
        <p className='text-3xl text-white text-center'>
          {Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}
        </p>
      </div>
      )
    }
    
    export default QuestionOne