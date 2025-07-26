import { Check, CheckCircle } from "lucide-react";

const MiddleComponent = () => {
  return (
    <section className="w-full py-16 px-6 bg-white flex justify-center">
      <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#081C3A] leading-snug">
            Your Journey Starts Here <br />
            <span className="text-[#081C3A]">Easy as Save, Book, Fly!</span>
          </h2>

          {/* Checkpoints */}
          <ul className="flex flex-col gap-4 mt-4">
            {[
              "Pick your monthly budget by selecting a subscription plan.",
              "Watch your points grow each month.",
              "When you are ready to book a flight, log in to your account and search for your preferred flight.",
              "When you are ready to book a flight, log in to your account and search for your preferred flight.",
              "Use the points you have saved to book!",
              "If you haven't saved up quite enough points when you're ready to book, you can add what you need right then through instant points!",
              "You can raise, lower, or freeze your plan at any time.",
              "If you want to gift or transfer points, You can send any points you have to any other SoarFare user at no additional cost.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="min-w-[36px] min-h-[36px] bg-white border-2 border-grey-300 rounded-full flex items-center justify-center shadow-sm">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-[330px] h-[350px] rounded-2xl overflow-hidden">
          <img
            src="/Screenshot 2025-07-27 011047.png"
            alt="Flight booking visual"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleComponent;
