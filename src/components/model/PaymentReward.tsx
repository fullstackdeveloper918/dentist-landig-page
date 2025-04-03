import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../ui/button"; // Assuming you have a custom Button component

interface PaymentRewardProps {
  show: boolean;
  onHide: () => void;
}

const PaymentReward: React.FC<PaymentRewardProps> = ({ show, onHide }) => {
  const [paymentRate, setPaymentRate] = useState<string | null>(null);
  const [isClaimable, setIsClaimable] = useState(false);

  // Simulate a payment rate setup based on the offer
  const fetchSpecialRate = () => {
    setPaymentRate("$1000");
    setIsClaimable(true); // Example to make it claimable
  };

  // Handle claim button click
  const handleClaim = () => {
    alert("Reward claimed! Your special rate is: " + paymentRate);
  };

  const handleClose = () => {
    onHide();
    setPaymentRate(null);
    setIsClaimable(false);
  };

  // Call fetchSpecialRate when modal is opened
  React.useEffect(() => {
    if (show) {
      fetchSpecialRate();
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-none">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-2xl md:text-3xl font-bold text-center mb-2 text-black bg-clip-text bg-gradient-to-r from-[#0F5AC3] to-[#072B5D]"
        >
          Claim Your Reward
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {paymentRate ? (
          <div className="text-center py-2">
            <p>
              Your special payment rate is: <strong>{paymentRate}</strong>
            </p>

            {isClaimable ? (
              <Button
                onClick={handleClaim}
                variant={"gradient"}
                className="mt-4 text-md button-hover transition-all duration-300"
              >
                Claim Your Reward
              </Button>
            ) : (
              <p>This offer is not available for you.</p>
            )}
          </div>
        ) : (
          <p>Loading your special offer...</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PaymentReward;
