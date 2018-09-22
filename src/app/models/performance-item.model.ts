import { PerformanceItem } from './performance-item.interface';

export const performanceItems: PerformanceItem[] = [
    {
        title: 'Preservation',
        equity: 21,
        target: false,
        fixedIncome: 33,
        cash: 46,
        data: ['data2', 30, 21, 10, 40, 15, 25, 41, 55, 14, 67, 85, 33]
    },
    {
        title: 'Conservative',
        equity: 27,
        target: true,
        fixedIncome: 33,
        cash: 40,
        data: ['data3', 33, 43, 51, 88, 14, 5, 51, 88, 97, 21, 45, 89]
    },
    {
        title: 'Moderate',
        equity: 35,
        target: false,
        fixedIncome: 33,
        cash: 32,
        data: ['data4', 92, 34, 67, 73, 18, 90, 36, 78, 12, 67, 77, 56]
    },
    {
        title: 'Balanced',
        equity: 43,
        target: false,
        fixedIncome: 33,
        cash: 24,
        data: ['data5', 75, 45, 39, 65, 34, 74, 57, 81, 95, 37, 48, 59]
    },
    {
        title: 'Growth',
        equity: 45,
        target: false,
        fixedIncome: 34,
        cash: 21,
        data: ['data5', 14, 34, 56, 34, 68, 38, 93, 89, 35, 67, 45, 62]
    },
    {
        title: 'Addressive',
        equity: 32,
        target: false,
        fixedIncome: 24,
        cash: 11,
        data:  ['data6', 13, 12, 17, 22, 19, 35, 23, 89, 94, 45, 15, 29]
    }
];

export const targetPerformanceItem: PerformanceItem = {
        title: 'Your Target',
        equity: 33,
        target: false,
        fixedIncome: 67,
        cash: 0,
        data:  ['data1', 32, 21, 15, 29, 49, 55, 43, 19, 23, 41, 11, 39]
}