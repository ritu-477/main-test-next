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
        <div className='bg-gray-400 py-12'>
        <p className='text-3xl text-center'>
          {Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}
        </p>
      </div>
      )
    }
    
    export default QuestionOne