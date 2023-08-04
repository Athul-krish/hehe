#include<stdio.h>
void main()
{
char *ptr;
int i;
clrscr();
printf("Enter a string:");
gets(ptr);
printf("Given string:");
puts(ptr);
for(i=0;*(ptr+i)!='\0';i++);
printf("String length:%d",i);
getch();
}