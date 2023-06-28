import Subheader from '@/components/Subheader'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'

import React, { useState } from 'react'

const Create = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [prize, setPrize] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [expiresAt, setExpiresAt] = useState('')

  const onReset = () => {
    setTitle('')
    setDescription('')
    setImageUrl('')
    setPrize('')
    setTicketPrice('')
    setExpiresAt('')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!title || !description || !imageUrl || !prize || !ticketPrice || !expiresAt) return

    const params = {
      title,
      description,
      imageUrl,
      prize,
      ticketPrice,
      expiresAt: new Date(expiresAt).getTime(),
    }

    console.log(params)
    onReset()
    router.push('/')
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target

    switch (name) {
      case 'title':
        setTitle(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'imageUrl':
        setImageUrl(value)
        break
      case 'prize':
        setPrize(value)
        break
      case 'ticketPrice':
        setTicketPrice(value)
        break
      case 'expire':
        setExpiresAt(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <div>
        <Head>
          <title>Dapp Lottery - Create new Jackpot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-gradient-to-r from-purple-500 to-blue-500"'>
          <Subheader />
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">Create Jackpots</h2>
          <p className="text-gray-600 mb-6 text-center">
            Please fill in the form below to create a Create Jackpot.
          </p>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter the title"
              value={title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter the image URL"
              value={imageUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="prize" className="block text-gray-700 font-medium mb-1">
              Prize
            </label>
            <input
              type="text"
              id="prize"
              name="prize"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter the prize"
              value={prize}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ticketPrice" className="block text-gray-700 font-medium mb-1">
              Ticket Price
            </label>
            <input
              type="text"
              id="ticketPrice"
              name="ticketPrice"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter the ticket price"
              value={ticketPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expire" className="block text-gray-700 font-medium mb-1">
              Expires At
            </label>
            <input
              type="date"
              id="expire"
              name="expire"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Enter the expiration date"
              value={expiresAt}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border border-gray-300 rounded-md py-2 px-3 w-full h-20 resize-none focus:outline-none focus:border-indigo-500"
              placeholder="Enter the description"
              value={description}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors w-full "
          >
            Submit Jackpots
          </button>
        </form>
      </div>
    </>
  )
}

export default Create
