const NavItems = [
  {
    id: 1,
    name: 'COMPANY',
    desc: 'Wayland is a deeptech software innovation firm built around an education accelerator and R&D incubator.',
    subs: [
      { name: 'about us', link: 'about' },
      { name: 'careers', link: 'careers' },
      { name: 'get in touch', link: 'contact' }
    ]
  },
  {
    id: 2,
    name: 'PRODUCTS',
    desc: 'Wayland’s innovation culture leads to internal startups that we support and encourage. Learn more.',
    subs: [
      { name: 'sam', link: 'safesurgeryglobal.com', external: true },
      { name: 'origin', link: 'construction' },
      {
        name: 'purecloud',
        link: 'purecloudairquality.com',
        external: true
      }
    ]
  },
  {
    id: 3,
    name: 'INDUSTRIES',
    desc: 'Wayland teams specialize in software and robotics technologies that provide key value across industries.',
    subs: [
      { name: 'healthcare', link: 'construction' },
      { name: 'robotics', link: 'construction' },
      { name: 'education', link: 'construction' }
    ]
  },
  {
    id: 4,
    name: 'SERVICES',
    desc: 'Wayland specializes in high-value technologies for robotics, cloud, and data science applications.',
    subs: [
      { name: 'Embedded Engineering', link: 'construction' },
      { name: 'Custom Fullstack', link: 'construction' },
      { name: 'AI/ML', link: 'construction' }
    ]
  }
  // {
  //   id: 4,
  //   name: 'NEWS & INSIGHTS',
  //   desc: 'Updates from the Wayland innovation community and timely industry insights.',
  //   subs: [
  //     { name: 'blog', link: 'construction' },
  //     { name: 'articles', link: 'construction' },
  //     { name: 'events', link: 'construction' },
  //     { name: 'research', link: 'construction' },
  //     { name: 'white papers', link: 'construction' }
  //   ]
  // }
]

export default NavItems
