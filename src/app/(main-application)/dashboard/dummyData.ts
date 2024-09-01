import { Assets } from "@/utils/remoteAssets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const installments = [
    {
        number: 1,
        installment_type: '1st Installment',
        paid_on: 'Paid on: 31/03/2022',
        amount: 'N150,000.00',
    },
    {
        number: 2,
        installment_type: '2nd Installment',
        paid_on: 'Paid on: 31/03/2022',
        amount: 'N200,000.00',
    },
    {
        number: 3,
        installment_type: '3rd Installment',
        paid_on: 'Paid on: 31/03/2022',
        amount: 'N150,000.00',
    },
    {
        number: 4,
        installment_type: '4th Installment',
        paid_on: 'Paid on: 31/03/2022',
        amount: 'N200,000.00',
    },
];

export interface Installments {
    number: number;
    installment_type: string;
    paid_on: string;
    amount: string;
}

export const notifications = [
    {
        img: Assets.profile_img,
        text: 'Dear Customer you ar...',
        time: '1h ago',
    },
    {
        img: Assets.profile_img,
        text: 'Dear Customer you ar...',
        time: '1h ago',
    },
    {
        img: Assets.profile_img,
        text: 'Dear Customer you ar...',
        time: '1h ago',
    },
    {
        img: Assets.profile_img,
        text: 'Dear Customer you ar...',
        time: '1h ago',
    },
    {
        img: Assets.profile_img,
        text: 'Dear Customer you ar...',
        time: '1h ago',
    },
];

export interface Notifications {
    img: string | StaticImport;
    text: string;
    time: string;
}