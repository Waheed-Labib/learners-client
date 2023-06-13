import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';

const FAQBody = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div>

            <Accordion>
                <Accordion.Item className={`mb-3 ${theme === 'dark' ? 'bg-dark text-light' : ''}`} eventKey="0">
                    <Accordion.Header className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>What qualifications are required to pursue these courses?</Accordion.Header>
                    <Accordion.Body className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={`mb-3 ${theme === 'dark' ? 'bg-dark text-light' : ''}`} eventKey="1">
                    <Accordion.Header className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>Do the students get any certificate?</Accordion.Header>
                    <Accordion.Body className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={`mb-3 ${theme === 'dark' ? 'bg-dark text-light' : ''}`} eventKey="2">
                    <Accordion.Header className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>Can I get a job after my course?</Accordion.Header>
                    <Accordion.Body className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={`mb-3 ${theme === 'dark' ? 'bg-dark text-light' : ''}`} eventKey="3">
                    <Accordion.Header className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>Can I get any discount?</Accordion.Header>
                    <Accordion.Body className={`${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQBody;