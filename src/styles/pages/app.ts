import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  width: '3rem',
  height: '3rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '6px',
  position: 'relative',
  backgroundColor: '$gray800',

  div: {
    width: '1.9rem', 
    height: '1.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    borderRadius: '50%',
    backgroundColor: '$gray900',

    span: {
      width: '1.5rem', 
      height: '1.5rem',
      color: '$white',
      backgroundColor: '$green500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    }
  }

  
})