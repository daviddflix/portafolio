
import { render, screen } from '@testing-library/react'
import { Landing } from '../landing/landing.jsx';

test('renders landing', () => {
const componente = render(<Landing/>)
console.log(componente)

  });
