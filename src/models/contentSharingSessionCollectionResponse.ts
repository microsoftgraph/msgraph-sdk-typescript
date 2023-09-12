import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ContentSharingSession } from './contentSharingSession';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ContentSharingSessionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ContentSharingSession[] | undefined;
}
