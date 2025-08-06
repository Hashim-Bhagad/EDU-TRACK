/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
//Bubble sort Algorithm
void swap(int *arr, int a, int b);
void BubbleSort(int *arr, int n);
void printArray(int *arr, int n);
int main()
{
	int n = 5;
	int arr[] = {4, 1, 5, 2, 3};
	printf("The unsorted Array is : \n");
	printArray(arr, n);
	BubbleSort(arr, n);
	    printf("The Sorted Array is :  \n");
	printArray(arr, n);

	return 0;
}
void swap(int *arr, int a, int b) {
	int temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
void BubbleSort(int *arr, int n) {
	for(int i = 0; i < n - 1; i++) {
		for(int j = 0; j < n-i-1; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}
}
void printArray(int *arr, int n){
    for(int i = 0; i < n; i++){
        printf("%d\t", arr[i]);
    }
    printf("\n");
}