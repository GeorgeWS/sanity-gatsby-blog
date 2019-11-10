export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc761c8936ba5ba49d86684',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xwaqnawt',
                  apiId: '232f6473-087e-495c-85b9-f33f3aea64b4'
                },
                {
                  buildHookId: '5dc761c82e96d3260c22a5be',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9oqveu1j',
                  apiId: '7c2ec058-ee44-49bf-93f2-197d49227126'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeorgeWS/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9oqveu1j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
