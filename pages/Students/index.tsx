import React from 'react';
import Button from '@/components/Button';
import "../../app/globals.css"

export default function Students() {
  return  <div className="row p-5">
  <div className="grid grid-cols-1 gap-2 pl-2">
      <h1 className='bold-40 lg:bold-80 text-white'>
      <div className="break-line"></div>
      <span className="text-orange-10">For </span>students
      <div className="line-break: inherit"></div>
      </h1>

      <br />

    <div className="container pl-2">
      <div className="grid grid-cols-2 gap-1 pl-2">
        <div className="grid grid-cols-1 gap-1">
          <ul>
            <li className='text-white'><span className='bold-17 lg:bold-16'>Don’t just learn. BUILD! :</span> Tech world is infinite, and the fastest way to get better is by continuously pushing on a project.</li>
            <li className='text-white'><span className='bold-17 lg:bold-16'>Fantasies vs Data :</span> Forget random ideas. we do check the viability of product before picking them. If it’s not going to end user, you won’t be building it.</li>
            <li className='text-white'><span className='bold-17 lg:bold-16'>Lower risk :</span> No need to cut your cash flow. Let the business brew before you go ALL-IN</li>
            <li className='text-white'><span className='bold-17 lg:bold-16'>Less Ad-hoc, more work :</span> Allow us to set your systems, thereby reducing unnecessary blockers and ad-hocs</li>
            <li className='text-white'><span className='bold-17 lg:bold-16'>Unknown-unkowns :</span> Avoid the common founder mistakes. Use our failures to fail at better problems </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-1 pl-4">
          <ul>
          <li className='text-white'><span className='bold-17 lg:bold-16'>Drive Innovation: </span> Keep innovating. Drive the society to better future and nurture the next gen of entrepreneurs.</li>
          <li className='text-white'><span className='bold-17 lg:bold-16'>Skin in the game: </span> We will be blunt. Talk is cheap. Everybody got ideas, your execution (TODAY) is all that matters</li>
          <li className='text-white'><span className='bold-17 lg:bold-16'>Investor Access: </span> Work hard, build the right tools and funding won’t be your biggest headache.</li>
          <li className='text-white'><span className='bold-17 lg:bold-16'>Compliance and Paperwork: </span> Don’t get bogged down in the paperwork for your company and team-members. Just build and let us take care of the rest. </li>
          </ul>
        </div>
      </div>
    <br/>

    </div>

  </div>
    <div className='lg:flexCenter pl-40'>
            <Button
                type="button"
                title="Start Building"
                variant="btn_pink_orange"
            />
    </div>
  </div>
}
