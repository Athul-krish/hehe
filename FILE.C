#include<stdio.h>
#include<conio.h>
#include<math.h>
void main()
{
FILE * f1,*f2;
int n,i;
char ch;
clrscr();
f1=fopen("even","w");
f2=fopen("odd","w");
if(f1==NULL||f2==NULL)
printf("File cannot be opened");
else
{
do
{
printf("Enter a number:");
scanf("%d",&n);
if(n%2==0)
putw(n,f1);
else
putw(n,f2);
printf("Do you want to continue(y/n):");
flushall();
scanf("%c",&ch);
}
while(ch=='y');
fclose(f1);
fclose(f2);
printf("\n Even numbers:");
f1=fopen("Even","r");
while((n=getw(f1))!=EOF)
{
printf("%d ",n);
}
fclose(f1);
printf("\n Odd numbers:");
f2=fopen("odd","r");
while((n=getw(f2))!=EOF)
{
printf("%d ",n);
}
fclose(f2);
}
getch();
}
