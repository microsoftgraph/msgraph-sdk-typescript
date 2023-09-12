import { type AccessPackageResourceRequest } from './accessPackageResourceRequest';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageResourceRequest[] | undefined;
}
