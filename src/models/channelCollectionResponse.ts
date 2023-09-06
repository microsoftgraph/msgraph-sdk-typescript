import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Channel } from './channel';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ChannelCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Channel[] | undefined;
}
