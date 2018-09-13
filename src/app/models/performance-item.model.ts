import { PerformanceItem } from './performance-item.interface';

export const performanceItems: PerformanceItem[] = [
    {
        title: 'Preservation',
        equity: 21,
        target: false,
        fixedIncome: 33,
        cash: 46
    },
    {
        title: 'Conservative',
        equity: 27,
        target: true,
        fixedIncome: 33,
        cash: 40
    },
    {
        title: 'Moderate',
        equity: 35,
        target: false,
        fixedIncome: 33,
        cash: 32
    },
    {
        title: 'Balanced',
        equity: 43,
        target: false,
        fixedIncome: 33,
        cash: 24
    },
    {
        title: 'Growth',
        equity: 45,
        target: false,
        fixedIncome: 34,
        cash: 21
    },
    {
        title: 'Addressive',
        equity: 32,
        target: false,
        fixedIncome: 24,
        cash: 11
    }
];

export const targetPerformanceItem: PerformanceItem = {
        title: 'Your Target Allocation',
        equity: 33,
        target: false,
        fixedIncome: 67,
        cash: 0
}