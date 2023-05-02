import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Conversation} from './conversation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Conversation[] | undefined;
}
