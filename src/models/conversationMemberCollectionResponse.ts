import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ConversationMember } from './conversationMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConversationMember[] | undefined;
}
