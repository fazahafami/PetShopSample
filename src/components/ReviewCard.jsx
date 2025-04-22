import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function ReviewCard() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            {/* review card section */}
            <Card>
                <Card.Body className="p-4 shadow-sm rounded-4 h-100 bg-white">
                    <p>"I always shop my pet supplies here. Great selection, fair prices, and fast delivery. Highly recommend!"</p>
                    <footer className="mt-3 mb-0" style={{ color: '#da828f' }}>— Sarah J., Dog Mom
                    </footer>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ReviewCard