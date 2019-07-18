import { entitiesMap } from '../data/entities';
import config from '../data/config.json';
import { range } from './util';

export default <FlatState>{
    boardRange: range(config.edge ** 2),
    entities: [
        { ...entitiesMap.player, id: 1 },
        { ...entitiesMap.gold, id: 2 },
        { ...entitiesMap.tile, id: 3 },
        { ...entitiesMap.tile, id: 3 },
        { ...entitiesMap.tile, id: 3 },
    ],
    turns: 0,
    placements: [
        {
            id: 1,
            entityId: 1,
            n: 4,
        },
        {
            id: 2,
            entityId: 2,
            n: 0,
        },
    ],
};
