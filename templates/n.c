#include<stdio.h>
int main()
{
    char *num="192323";
    char *single_digits[] = { "zero", "one", "two","three", "four","five", "six", "seven", "eight", "nine"};
    printf("%s\n", single_digits[*num - '0']);
}