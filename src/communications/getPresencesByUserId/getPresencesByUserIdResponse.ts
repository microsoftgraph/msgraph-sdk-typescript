import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {Presence} from '../../models/presence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetPresencesByUserIdResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Presence[] | undefined;
}
