import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ServiceUpdateMessage[] | undefined;
}
