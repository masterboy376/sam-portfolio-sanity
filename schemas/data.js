export default {
  name: 'data',
  title: 'Data',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'aboutImg',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'coverSkills',
      title: 'Cover Skills',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'lineChart',
      title: 'Line Chart Data',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'width',
              title: 'Width',
              type: 'string'
            },
            {
              name: 'color',
              title: 'Color',
              type: 'string'
            },

          ]
        }
      ]
    },
    {
      name: 'workflow',
      title: 'Workflow',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            },

          ]
        }
      ]
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'img',
              title: 'Image',
              type: 'image'
            },
            {
              name: 'body',
              title: 'Body',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            },

          ]
        }
      ]
    },
    {
      name: 'pieChart',
      title: 'Pie Chart Data',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'labels',
              title: 'Labels',
              type: 'array',
              of: [
                {
                  type: 'string',
                }
              ]
            },
            {
              name: 'datasets',
              title: 'Datasets',
              type: 'array',
              of: [
                {
                  type: 'document',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    },
                    {
                      name: 'data',
                      title: 'Data',
                      type: 'array',
                      of: [
                        {
                          type: 'number',
                        }
                      ]
                    },
                    {
                      name: 'backgroundColor',
                      title: 'Background Color',
                      type: 'array',
                      of: [
                        {
                          type: 'string',
                        }
                      ]
                    },
                    {
                      name: 'borderColor',
                      title: 'Border Color',
                      type: 'array',
                      of: [
                        {
                          type: 'string',
                        }
                      ]
                    },
                    {
                      name: 'borderWidth',
                      title: 'Border Width',
                      type: 'number',
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string'
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string'
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string'
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string'
    },
  ],
}