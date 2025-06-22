public class Logger{
    private static volatile Logger instance;
    private Logger(){
        System.out.println("Instance is Initiated..");
    }

    public static Logger getInstance(){
        
        if(instance==null){
            synchronized(Logger.class){
                if(instance==null){
                    instance =new Logger();
                }
            }
        }
        return instance;
    }
}