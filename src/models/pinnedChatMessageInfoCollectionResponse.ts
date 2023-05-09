import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PinnedChatMessageInfo[] | undefined;
}
