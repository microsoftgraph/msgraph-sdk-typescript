import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ContentType} from './contentType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ContentType[] | undefined;
}
