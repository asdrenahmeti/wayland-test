import { Navigation } from "../../utils/types"

const NavItems : Navigation[] = [
  {
    id: 1,
    name: 'ABOUT',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Pellentesque Efficitur Consequat Lacinia.',
    subs: ['about us', 'our values', 'careers', 'get in touch']
  },
  {
    id: 2,
    name: 'PRODUCTS',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Pellentesque Efficitur Consequat Lacinia.',
    subs: ['sem', 'origin', 'lorem', 'lorem']
  },
  {
    id: 3,
    name: 'INDUSTRIES',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Pellentesque Efficitur Consequat Lacinia.',
    subs: ['healthcare', 'robotics', 'education', 'lorem']
  },
  {
    id: 4,
    name: 'NEWS & INSIGHTS',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Pellentesque Efficitur Consequat Lacinia.',
    subs: ['customer stories', 'insights']
  }
]

export default NavItems
