export default { 
    title: 'Actor', // stor boksav
    name: 'actor', 
    type: 'document',
    fields: [  // movies
        {
            name: 'actors',
            type: 'string',  // kalt typen string
            title: 'Actors',
            description: 'This is the name of the actor',
        },
        {
            // slug url 
            type: `slug`,
            name: `name`,
            title: `name`,
            description: `unique adress for actor`,
            validation: (Rule) => Rule.required(),
            options:  { // når man bruker validation, bruker man også options - les i dokumentasjonen.
                source: `actor`,
                maxlength: 100, // seo 
                slugfy: input => input
                .toLowerCase()
                .slice(0,100),
            }
        },
        
         // reference:
         // For aa referere - bruker dokumentasjonen - actor schema knytte det til movie.
         {
            name: `movie`,
            type: 'reference',
            title:`movie`,
            to:{type: 'movie'},//Grunnen til et det står type= er at vi i actor.js dokumentet har en name="movies"
        },

        // type for text
        {
           type:`text`,
           name:'actorTextField', // service
           title: 'actor story',
           description: `more info of actor `
        },

        // image:
        {
            type:`image`,
            name:'poster',
            title: 'actor poster',
            
         },



    ],

     /**  Preview gjør at vi kan tilpasse hva som vises i grensesnittet sammen med tittelen.
     * select til å hente det vi vil vise.
     *preview: {
        select: {
            title: 'name.current',
        },
    }, 
     */
    

}
