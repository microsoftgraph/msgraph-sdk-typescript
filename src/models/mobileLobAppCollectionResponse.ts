import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MobileLobApp } from './mobileLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileLobApp[] | undefined;
}
