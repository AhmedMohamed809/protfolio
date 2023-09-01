import React from 'react'
import Image from "next/image"
function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image src="https://media.licdn.com/dms/image/C4E03AQEr5LIkejyb-Q/profile-displayphoto-shrink_800_800/0/1655157555401?e=1698883200&v=beta&t=NshqrTf7GAgdcLFr4EcwjoPQshERiesW2B_r-Hk0ZEc"
                 alt="my_photo" width="192" height="192" quality="95" priority={true} />
            </div>

        </div>
    </section>
  )
}

export default Intro