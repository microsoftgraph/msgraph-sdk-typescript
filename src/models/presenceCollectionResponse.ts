import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Presence} from './presence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PresenceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Presence[] | undefined;
}
