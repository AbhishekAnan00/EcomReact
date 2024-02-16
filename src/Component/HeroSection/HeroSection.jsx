import React from 'react'
import man_png from '../../assets/man.png.png'
export const HeroSection = () => {
  return (
    <div className="hero flex  bg-slate-200">
      <div className="hero_left p-10">
        <h1 className='text-center text-4xl mb-10'>Home</h1>
       <p className='text-center'>Lorem ipsum dolor sit, amet pariatur corporis illo, fuga sunt numquam id earum est excepturi nisi voluptatum quis unde, perferendis inventore distinctio repudiandae recusandae. Provident harum, alias esse in atque laudantium reiciendis doloremque facilis totam impedit consequuntur, illo dolore aperiam praesentium? Amet deleniti nostrum minus magni excepturi nisi nobis aut et modi consequatur tempore minima voluptatem accusamus, hic non blanditiis eos. Nisi, delectus doloremque dignissimos expedita esse unde. Quaerat ducimus debitis animi porro sit, repudiandae autem iste aut quo possimus nisi odio quod ab. Dolorem explicabo, error cupiditate quam veritatis hic deserunt natus possimus quas minima nobis unde iste dolorum ex quo, corrupti fugiat dolores magni temporibus blanditiis obcaecati quae neque quidem provident? Delectus commodi corporis incidunt perspiciatis.</p>
      </div>
      <div className="hero_right">
       <img src={man_png}  />
      </div>
    </div>
  )
}
