const { app } = require('@azure/functions');

function normalizeTo12(index) {
    if (index > 12) return index - 12;
    else return index;
}

app.http('arudha-pada', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const planetIndex = Number(request.query.get('planet'));
        const houseNumber = Number(request.query.get('house'));

        if (planetIndex == undefined || houseNumber == undefined)
            return { body: `Required parameter ?planet=&house=` }

        let arudhaIndex = (planetIndex - houseNumber) + planetIndex;
        return { body: `arudha: ${normalizeTo12(arudhaIndex)}` };
    }
});

app.http('argala', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const planetIndex = Number(request.query.get('planet'));
        const isVakri = Number(request.query.get('vakri'));

        if (planetIndex == undefined || isVakri == undefined)
            return { body: `Required parameter ?planet=&vakri=` }

        let argala = [2, 4, 5, 11];
        for (let i = 0; i < 4; i++) {
            argala[i] = normalizeTo12(planetIndex - 1 + argala[i]);
        }
        return { body: argala };
    }
});

app.http('virodh-argala', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const planetIndex = Number(request.query.get('planet'));
        const isVakri = Number(request.query.get('vakri'));

        if (planetIndex == undefined || isVakri == undefined)
            return { body: `Required parameter ?planet=&vakri=` }

        let argala = [12, 10, 3];
        for (let i = 0; i < 3; i++) {
            argala[i] = normalizeTo12(planetIndex - 1 + argala[i]);
        }
        return { body: argala };
    }
});

app.http('graha-drishti', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const planetEnum = Number(request.query.get('planet'));
        const grahaLocationIndex = Number(request.query.get('pIndex'));

        grahaDrishti = []
        switch (planetEnum) {
            case 1:
            case 2:
            case 3:
            case 4:
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 7))
                break;

            case 5:
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 4));
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 7))
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 8));
                break;

            case 7:
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 3));
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 7))
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 10));
                break;

            case 6:
            case 8:
            case 9:
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 5));
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 7))
                grahaDrishti.push(normalizeTo12(grahaLocationIndex - 1 + 9));
                break;
        }

        return { body: grahaDrishti };
    }
});

app.http('planet', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const planets = {
            Sun: 1,
            Moon: 2,
            Merquery: 3,
            Venus: 4,
            Mars: 5,
            Jupiter: 6,
            Saturn: 7,
            Rahu: 8,
            Ketu: 9
        }
        return { body: planets };
    }
});