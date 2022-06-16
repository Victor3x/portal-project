import React from 'react'

export type InputProps = {
  label?: string
  name: string
  type: string
}

export const Input = ({ label, name, type }: InputProps) => {
  return (
    <>
      {!!label && (
        <label className="text-slate-50" htmlFor="user">
          {label}
        </label>
      )}
      <input
        className="w-full outline-none py-2 px-2 rounded-md mb-2"
        id={name}
        name={name}
        type={type}
        placeholder={name}
      />
    </>
  )
}
