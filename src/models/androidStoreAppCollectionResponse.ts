import { type AndroidStoreApp } from './androidStoreApp';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AndroidStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AndroidStoreApp[] | undefined;
}
