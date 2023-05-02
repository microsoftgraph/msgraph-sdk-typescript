import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Message} from './message';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Message[] | undefined;
}
