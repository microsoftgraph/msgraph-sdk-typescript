import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MobileApp } from './mobileApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileApp[] | undefined;
}
