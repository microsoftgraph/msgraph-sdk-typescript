import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ConversationMember} from './conversationMember';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ConversationMember[] | undefined;
}
