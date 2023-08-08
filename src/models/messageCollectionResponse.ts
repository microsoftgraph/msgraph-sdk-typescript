import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Message} from './message';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Message[] | undefined;
}
