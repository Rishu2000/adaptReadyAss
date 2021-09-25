import java.util.*;

class RightAngleTri {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number = ");
        int num = scanner.nextInt();
        int root = (int) ((-1 + Math.sqrt(1 + 8 * num)) / 2);
        int startNum = num;
        int startRoot = root;
        for (int i = root; i > 0; i--) {
            startNum = (startNum - (startRoot--));
            int printNum = startNum + 1;
            for (int j = 0; j < i; j++) {
                System.out.print(printNum++);
            }
            System.out.println();
        }
        scanner.close();
    }
}