import type {AccessPackageResourceScope} from './accessPackageResourceScope';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceScopeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageResourceScope[] | undefined;
}
