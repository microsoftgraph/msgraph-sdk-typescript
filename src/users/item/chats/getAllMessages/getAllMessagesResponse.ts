import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {ChatMessage} from '../../../../models/chatMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAllMessagesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ChatMessage[] | undefined;
}
