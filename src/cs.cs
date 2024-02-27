using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter the first number: ");
        if (double.TryParse(Console.ReadLine(), out double num1))
        {
            Console.Write("Enter the second number: ");
            if (double.TryParse(Console.ReadLine(), out double num2))
            {
                Console.WriteLine($"Sum: {num1 + num2}");
                Console.WriteLine($"Difference: {num1 - num2}");
                Console.WriteLine($"Product: {num1 * num2}");

                if (num2 != 0)
                {
                    Console.WriteLine($"Quotient: {num1 / num2}");
                }
                else
                {
                    Console.WriteLine("Cannot divide by zero.");
                }
            }
            else
            {
                Console.WriteLine("Invalid second number. Please enter a valid numeric value.");
            }
        }
        else
        {
            Console.WriteLine("Invalid first number. Please enter a valid numeric value.");
        }
    }
}