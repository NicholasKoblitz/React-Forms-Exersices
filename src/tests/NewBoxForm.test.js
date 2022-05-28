import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import NewBoxForm from '../components/NewBoxForm'


// Smoke Test
it('should render form', () => {
    render(<NewBoxForm/>);
})

// Snapshot Test
