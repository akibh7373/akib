import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
        <Container className='flex justify-between items-center py-4 w-[80%] mx-auto'>
            <LogoBrand>
                <a><img src="" alt="" /> <span className='text-xl font-bold capitalize text-black'>akib hossain</span></a>
            </LogoBrand>
            <Menu className='lg:px-[20px] lg:py-3 rounded-3xl border border-1 border-black'>
                <a style={{cursor: 'pointer'}} className='lg:px-[20px] lg:py-2 rounded-3xl uppercase text-sm text-black'>work</a>
                <a style={{cursor: 'pointer'}} className='lg:px-[20px] lg:py-2 ml-4 rounded-3xl uppercase text-sm text-black'>Contact</a>
            </Menu>
            <Button className='px-4 py-2 border-4 border-black text-sm uppercase  bg-white'>Download Resume</Button>
        </Container>
    </>
  )
}
const Container = styled.div``
const LogoBrand = styled.div``
const Menu = styled.div``
const Button = styled.a``