module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
                to: 'letanthanh049@gmail.com',
                subject: 'Test email',
                text: 'This is a test email',
              });
        } catch(err) {
            console.log(err);
        }
    }
}