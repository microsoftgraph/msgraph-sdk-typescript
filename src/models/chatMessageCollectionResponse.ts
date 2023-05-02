import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ChatMessage} from './chatMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ChatMessage[] | undefined;
}
