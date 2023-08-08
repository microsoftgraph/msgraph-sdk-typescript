import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PinnedChatMessageInfo[] | undefined;
}
