import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceScopeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageResourceScope[] | undefined;
}
