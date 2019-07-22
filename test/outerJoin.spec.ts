import { expect } from 'chai';
import { outerJoin } from '../src/util';

const chasie: State = {
    board: {
        range: [],
        edge: 0,
    },
    idCounter: 0,
    turns: 0,
    inner: {
        gos: [],
        placements: [],
    },
};

describe('outerJoin', () => {
    it('Has neutral element of empty array', () => {
        expect(outerJoin(chasie.inner.gos, chasie.inner.placements, 'id', 'n', 'placement')).deep.eq([]);
    });

    it('Joins example game object on placement', () => {
        expect(
            outerJoin(
                [{ id: 1, color: 'a', name: 'nm', symbol: 'sy', precedence: 0 }],
                [{ goId: 1, id: 2, n: 42 }],
                'id',
                'goId',
                'placement',
            ),
        ).deep.eq([
            {
                id: 1,
                color: 'a',
                name: 'nm',
                symbol: 'sy',
                precedence: 0,
                placement: {
                    n: 42,
                    goId: 1,
                    id: 2,
                },
            },
        ]);
    });

    it('When there are no matches undefined', () => {
        expect(
            outerJoin(
                [
                    { id: 1, color: 'a', name: 'nm', symbol: 'sy', precedence: 0 },
                    { id: 2, color: 'a', name: 'nm', symbol: 'sy', precedence: 2 },
                ],
                [{ goId: 1, id: 2, n: 42 }],
                'id',
                'goId',
                'placement',
            ),
        ).deep.eq([
            {
                id: 1,
                color: 'a',
                name: 'nm',
                symbol: 'sy',
                precedence: 0,
                placement: {
                    n: 42,
                    goId: 1,
                    id: 2,
                },
            },
            {
                id: 2,
                color: 'a',
                name: 'nm',
                symbol: 'sy',
                precedence: 2,
                placement: null,
            },
        ]);
    });
});
