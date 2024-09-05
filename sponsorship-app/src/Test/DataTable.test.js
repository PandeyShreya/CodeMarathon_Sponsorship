import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTable from '../Components/DataTable';

const mockData = [
  { sponsorId: 1, sponsorName: 'Nike', totalPayment: 225000, numberOfPayments: 3, LatestPaymentDate: '2024-09-10' },
  { sponsorId: 2, sponsorName: 'Adidas', totalPayment: 200000, numberOfPayments: 2, LatestPaymentDate: '2024-07-20' },
];

test('renders DataTable with provided data', () => {
  render(<DataTable data={mockData} />);
  
  expect(screen.getByText('Sponsor ID')).toBeInTheDocument();
  expect(screen.getByText('Sponsor Name')).toBeInTheDocument();
  expect(screen.getByText('Total Payment')).toBeInTheDocument();
  expect(screen.getByText('Number of Payments')).toBeInTheDocument();
  expect(screen.getByText('Latest Payment Date')).toBeInTheDocument();

  expect(screen.getByText('NNike')).toBeInTheDocument();
  expect(screen.getByText('Adidas')).toBeInTheDocument();
  expect(screen.getByText('225000')).toBeInTheDocument();
  expect(screen.getByText('200000')).toBeInTheDocument();
});
