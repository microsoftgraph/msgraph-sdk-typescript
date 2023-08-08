import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Conversation} from './conversation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Conversation[] | undefined;
}
