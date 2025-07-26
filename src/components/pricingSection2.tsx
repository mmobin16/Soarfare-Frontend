import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

const PricingSection2 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for casual travellers or those getting started",
      price: "$20",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Build flight credit every month",
        "Earn Elevation Rewards points",
        "Access to all SoarFare features",
        "Pause or cancel anytime",
        "Great for planning ahead on a budget"
      ],
      isPopular: false
    },
    {
      name: "Standard",
      description: "Our most popular plan - ideal for regular adventurers",
      price: "$50",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Everything in the Starter Plan",
        "Earn more flight credits, faster",
        "Accelerated Elevation Rewards accumulation",
        "Cancel unwanted getaways at anytime"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      description: "For frequent flyers and big dreamers",
      price: "$100",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Everything in the Standard Plan",
        "Maximize your monthly flight savings",
        "Reach your travel goals even quicker",
        "Ideal for international trips or multiple trips per year"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#081C3A] mb-8">
            Choose a Plan<br/> that works for You
          </h2>
          <p className="text-sm text-muted-foreground mb-2">SoarFare is great for those that love to travel to always be building up<br/> points for the next great adventure!</p>
          
          
          {/* Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly 
                  ? "bg-orange-500 text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly 
                  ? "bg-orange-500 text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative ${
                plan.isPopular 
                  ? "bg-orange-500 text-white border-orange-500" 
                  : "bg-card"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-orange-500 hover:bg-white">
                    Our most popular plan
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className={`text-xl font-semibold ${
                  plan.isPopular ? "text-white" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.isPopular ? "text-white/90" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
                
                <div className="mt-6">
                  <span className={`text-4xl font-bold ${
                    plan.isPopular ? "text-white" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.isPopular ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? "bg-white text-orange-500 hover:bg-white/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.isPopular ? "text-white" : "text-green-500"
                      }`} />
                      <span className={`text-sm ${
                        plan.isPopular ? "text-white/90" : "text-muted-foreground"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection2;