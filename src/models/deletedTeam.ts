import type {Channel} from './channel';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeletedTeam extends Entity, Parsable {
    /**
     * The channels that are either shared with this deleted team or created in this deleted team.
     */
    channels?: Channel[] | undefined;
}
