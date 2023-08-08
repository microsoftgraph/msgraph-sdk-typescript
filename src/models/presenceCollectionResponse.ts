import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Presence} from './presence';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PresenceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Presence[] | undefined;
}
