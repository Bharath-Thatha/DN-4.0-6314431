public class FinancialForecasting{

    public static double forecast(double pastValue, double growthRate, int years) {
        if (years == 0) 
            return pastValue;

        return forecast(pastValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        double pastValue = 1000.0;      
        double growthRate = 0.08;      
        int years = 5;                
        double futureValue = forecast(pastValue, growthRate, years);
        System.out.printf("Future Value : %.2f", futureValue);
    }
}
