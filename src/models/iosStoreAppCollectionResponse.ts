import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type IosStoreApp } from './iosStoreApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IosStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IosStoreApp[] | undefined;
}
