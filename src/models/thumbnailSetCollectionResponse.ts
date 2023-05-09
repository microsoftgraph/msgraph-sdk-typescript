import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ThumbnailSet} from './thumbnailSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThumbnailSetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ThumbnailSet[] | undefined;
}
