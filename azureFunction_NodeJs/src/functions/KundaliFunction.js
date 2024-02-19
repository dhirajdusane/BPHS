const { app } = require('@azure/functions');

function normalizeTo12(index){
	if(index > 12) return index - 12 ;
	else return index;
}

app.http('KundaliFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});

app.http('arudha-pada', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const planetIndex = Number(request.query.get('planet'));
        const houseNumber = Number(request.query.get('house'));

        if(planetIndex == undefined || houseNumber == undefined)
            return {body: `Required parameter ?planet=&house=`}

        let arudhaIndex = (planetIndex - houseNumber) + planetIndex;
        return { body: `arudha: ${normalizeTo12(arudhaIndex)}` };
    }
});
