import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ChatMessageHostedContent } from './chatMessageHostedContent';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ChatMessageHostedContent[] | undefined;
}
