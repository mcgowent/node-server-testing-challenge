const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    it('Checks that testing environment is being used', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('insert()', () => {
        it('inserting a hobbit into the db', async () => {
            await Hobbits.insert({ name: 'Bilbo' });

            let hobbits = await db('hobbits');

            expect(hobbits).toHaveLength(1);
        });

        it('should insert hobbits into the db', async () => {
            const [id] = await Hobbits.insert({ name: 'Bilbo' });

            let hobbit = await db('hobbits')
                .where({ id })
                .first();

            expect(hobbit.name).toBe('Bilbo');
        });
    });
});
