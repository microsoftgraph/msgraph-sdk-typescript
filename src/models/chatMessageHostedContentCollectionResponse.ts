import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ChatMessageHostedContent[] | undefined;
}
