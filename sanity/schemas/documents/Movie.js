export default {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: `Movie title`
      },
      {
        // slug url - for n
        type: `slug`, // just char
        name: `slug1`,  // error of name called twice slug, rename
        title: `name`,
        description: `unique adress for actor`,
        validation: (Rule) => Rule.required(),
        options:  { // når man bruker validation, bruker man også options - les i dokumentasjonen.
            source: `title`,
            maxlength: 100, // seo 
            slugfy: input => input
            .toLowerCase()
            //.replace(/\s+/g, '-')
            .slice(0,100),
        }
    },
    {
        type: 'reference',
        name: 'actor',
        title: 'actor',
        to: {type: 'actor'},
    },

    // other actor
    {
        type: 'reference',
        name: 'actoors',  // error of two with same name 
        title: 'title',
                to: [{type: 'actor'}],
        
    },
    // text
    {
        type: 'text',
        name: 'plot',
        title: 'plot',
        description: 'plot of the movie.'
    },
    // image
   {type:`image`,
   name: `poster`,
   title: `Movie poster` 
   } 





], // end of fields

/**
 * preview: {
    select: {
        title: 'slug.current',

    },
},
 */


}
