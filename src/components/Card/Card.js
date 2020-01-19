import React from 'react'

const Card = props => {
  return (
    <div class="bg-white shadow p-4 rounded lg:w-64">
      <div class="text-center mt-4">
        <p class="text-grey-dark font-bold">Name</p>
        <p class="text-sm font-hairline text-grey-dark mt-1">Subtitle</p>
      </div>
      <div class="flex justify-center mt-4">
        <img
          class="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full"
          src=""
          alt="Avatar"
        />
      </div>
      <div class="mt-6 flex justify-between text-center">
        <div>
          <p class="text-grey-darker font-bold">20</p>
          <p class="text-xs mt-2 text-grey-dark font-hairline">Posts</p>
        </div>
        <div>
          <p class="text-grey-darker font-bold">99k</p>
          <p class="text-xs mt-2 text-grey-dark font-hairline">Likes</p>
        </div>
        <div>
          <p class="text-grey-darker font-bold">530</p>
          <p class="text-xs mt-2 text-grey-dark font-hairline">Shares</p>
        </div>
      </div>
      <div class="mt-6">
        <button class="rounded shadow-md w-full items-center shadow bg-blue px-4 py-2 text-white hover:bg-blue-light">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Card
