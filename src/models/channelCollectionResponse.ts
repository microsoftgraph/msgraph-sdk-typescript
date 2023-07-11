import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Channel} from './channel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Channel[] | undefined;
}
