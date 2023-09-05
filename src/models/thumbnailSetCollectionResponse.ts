import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ThumbnailSet } from './thumbnailSet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ThumbnailSetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ThumbnailSet[] | undefined;
}
