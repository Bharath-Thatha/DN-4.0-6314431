class Product{
    int productId;
    String productName;
    String category;
    public Product(int productId, String productName, String category){
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    public static int linearSearch1(Product[] products, int targetId){
        for (int i=0; i<products.length; i++) {
            if (products[i].productId==targetId){
                return i;
            }
        }
        return -1;
    }
    public static int binarySearch1(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId){
                return mid;
            } else if (products[mid].productId < targetId){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Pencil", "Stationery"),
            new Product(2, "Pouch", "Stationery"),
            new Product(3, "Laptop", "Electronics"),
            new Product(4, "Bottle", "Stationery")
        };
        int linearSearchResult = linearSearch1(products, 3);
        int binarySearchResult = binarySearch1(products, 3);
        System.out.println("Linear Search: " + linearSearchResult);
        System.out.println("Binary Search: " + binarySearchResult);
    }
}