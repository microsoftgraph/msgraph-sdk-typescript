import { type BaseCollectionPaginationCountResponse } from '../../models/baseCollectionPaginationCountResponse';
import { type Presence } from '../../models/presence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetPresencesByUserIdResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Presence[] | undefined;
}
