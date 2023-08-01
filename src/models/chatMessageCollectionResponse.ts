import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ChatMessage} from './chatMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ChatMessage[] | undefined;
}
