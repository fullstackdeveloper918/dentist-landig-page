"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const router = useRouter(); // Correctly using useRouter hook within a functional component
  const { query } = router;

  const [paymentRate, setPaymentRate] = useState<string | null>(null);
  const [isClaimable, setIsClaimable] = useState(false);

  useEffect(() => {
    if (query.id && query.name) {
      const specialId = query.id as string;
      const specialName = query.name as string;
      fetchSpecialRate(specialId, specialName);
    }
  }, [query]);

  const fetchSpecialRate = (id: string, name: string) => {
    if (name === "super_deal") {
      setPaymentRate("$1000");
      setIsClaimable(true);
    } else {
      setPaymentRate("$500");
      setIsClaimable(false);
    }
  };

  const handleClaim = () => {
    alert("Reward claimed! Your special rate is: " + paymentRate);
  };

  return (
    <div className="landing-page">
      <h1>Claim Your Reward</h1>
      {paymentRate ? (
        <div className="reward-info">
          <p>
            Your special payment rate is: <strong>{paymentRate}</strong>
          </p>

          {isClaimable ? (
            <button onClick={handleClaim} className="claim-button">
              Claim Your Reward
            </button>
          ) : (
            <p>This offer is not available for you.</p>
          )}
        </div>
      ) : (
        <p>Loading your special offer...</p>
      )}
    </div>
  );
};

export default LandingPage;
