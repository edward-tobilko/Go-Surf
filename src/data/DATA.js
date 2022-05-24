import { v4 as uuidv4 } from 'uuid';

import EastShore from './../assets/East Shore.png';
import SouthShore from './../assets/South Shore.png';
import WestShore from './../assets/West Shore.png';
import NorthShore from './../assets/North Shore.jpg';

import star_1 from './../assets/icons/Star.png';
import star_5 from './../assets/icons/Stars.png';


export const DataLineSlider = [
    { id: uuidv4(), title: 'North Shore', number: '01' },
    { id: uuidv4(), title: 'South Shore', number: '02' },
    { id: uuidv4(), title: 'West Shore', number: '03' },
    { id: uuidv4(), title: 'East Shore', number: '04' },
]

export const dataSlider = [
    { id: uuidv4(), title: 'North Shore' },
    { id: uuidv4(), title: 'South Shore' },
    { id: uuidv4(), title: 'West Shore' },
    { id: uuidv4(), title: 'East Shore' },
]

export const dataSurfSlider = [
    { id: uuidv4(), img: EastShore, title: 'Malibu Beach', subtitle: 'California | USA' },
    { id: uuidv4(), img: SouthShore, title: 'Airlie Beach', subtitle: 'Queensland | Australia' },
    { id: uuidv4(), img: WestShore, title: 'Cloud Nine', subtitle: 'Siargao | Philippines' },
    { id: uuidv4(), img: NorthShore, title: 'Vieux Boucau', subtitle: 'Hossegor | France' },
    { id: uuidv4(), img: EastShore, title: 'Malibu Beach', subtitle: 'California | USA' },
    { id: uuidv4(), img: SouthShore, title: 'Airlie Beach', subtitle: 'Queensland | Australia' },
    { id: uuidv4(), img: WestShore, title: 'Cloud Nine', subtitle: 'Siargao | Philippines' },
    { id: uuidv4(), img: NorthShore, title: 'Vieux Boucau', subtitle: 'Hossegor | France' },
    { id: uuidv4(), img: SouthShore, title: 'Chercago Beach', subtitle: 'Cherkasy | Ukraine' },
]

export const dataSurfMapContent = [
    {
        id: uuidv4(),
        beach: 'Airlie Beach',
        country: 'USA',
        surf:
        {
            results: '9 - 13',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+2.3',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '4 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Cloud Nine',
        country: 'Australia',
        surf:
        {
            results: '4 - 28',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+6.2',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '9 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Vieux Boucau',
        country: 'Philippines',
        surf:
        {
            results: '2 - 8',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+11',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '4 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Malibu Beach',
        country: 'France',
        surf:
        {
            results: '11 - 43',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+9.7',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '10 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Airlie Beach',
        country: 'USA',
        surf:
        {
            results: '5 - 20',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+6',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '14 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Cloud Nine',
        country: 'Australia',
        surf:
        {
            results: '0 - 3',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+1',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '8.2 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Malibu Beach',
        country: 'Philippines',
        surf:
        {
            results: '6 - 17',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+5.3',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '4 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'Vieux Boucau',
        country: 'France',
        surf:
        {
            results: '19 - 33',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+22.7',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '24 SE',
            subtitle: 'Wind (KTS)'
        },
    },
    {
        id: uuidv4(),
        beach: 'California',
        country: 'Ukraine',
        surf:
        {
            results: '129 - 233',
            subtitle: 'Surf (FT)'
        },
        woter:
        {
            results: '+122.7',
            subtitle: 'Tide (FT)'
        },
        wind:
        {
            results: '624 SE',
            subtitle: 'Wind (KTS)'
        },
    },
]

export const dataTravelSlider = [
    { id: uuidv4(), title: 'California | USA', destination: 'Queensland USA', distance: '5,065 Miles', travelTime: '18 Hours 16 Minutes', pricing: '$1,376 USD', rating: 'Awful', stars: star_1 },
    { id: uuidv4(), title: 'Queensland | Australia', destination: 'Queensland Australia', distance: '7,065 Miles', travelTime: '23 Hours 5 Minutes', pricing: '$1,976 USD', rating: 'Excellent', stars: star_5 },
    { id: uuidv4(), title: 'Siargao | Philippines', destination: 'Queensland Philippines', distance: '3,125 Miles', travelTime: '13 Hours 45 Minutes', pricing: '$1,070 USD', rating: 'Medium', stars: star_1 },
    { id: uuidv4(), title: 'Hossegor | France', destination: 'Queensland France', distance: '2,065 Miles', travelTime: '5 Hours 5 Minutes', pricing: '$976 USD', rating: 'Excellent', stars: star_5 },
    { id: uuidv4(), title: 'Cherkasy | Ukraine', destination: 'Queensland Ukraine', distance: '65 Miles', travelTime: '5 Minutes', pricing: '$1 USD', rating: 'Awful', stars: star_1 },
    { id: uuidv4(), title: 'Bali | Indonesia', destination: 'Queensland Indonesia', distance: '4,865 Miles', travelTime: '17 Hours 32 Minutes', pricing: '$2,076 USD', rating: 'Excellent', stars: star_5 },
    { id: uuidv4(), title: 'Egypt | Africa', destination: 'Queensland Africa', distance: '1,065 Miles', travelTime: '3 Hours 52 Minutes', pricing: '$676 USD', rating: 'Awful', stars: star_1 },
    { id: uuidv4(), title: 'Kemer | Turkey', destination: 'Queensland Turkey', distance: '1165 Miles', travelTime: '3 Hours 13 Minutes', pricing: '$376 USD', rating: 'Excellent', stars: star_5 },
    { id: uuidv4(), title: 'Puero | Brazil', destination: 'Queensland Brazil', distance: '1860 Miles', travelTime: '7 Hours 19 Minutes', pricing: '$999 USD', rating: 'Excellent', stars: star_5 },
]

export const dataShopSlider = [
    { id: uuidv4(), title: 'North Nugget TT Surfboard', stars: star_5, price: 799.99 },
    { id: uuidv4(), title: 'South Nugget CX Surfboard', stars: star_5, price: 599.99 },
    { id: uuidv4(), title: 'West Nugget IK Surfboard', stars: star_5, price: 299.99 },
    { id: uuidv4(), title: 'East Nugget AB Surfboard', stars: star_5, price: 499.99 },
]


// export const dataSlider = [
//     { id: uuidv4(), title: 'Lorem ipsum', subTitle: 'Lorem' },
//     { id: uuidv4(), title: 'Lorem ipsum', subTitle: 'Lorem' },
//     { id: uuidv4(), title: 'Lorem ipsum', subTitle: 'Lorem' },
// ]