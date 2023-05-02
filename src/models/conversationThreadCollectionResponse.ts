import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ConversationThread} from './conversationThread';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationThreadCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ConversationThread[] | undefined;
}
