import { type BaseCollectionPaginationCountResponse } from '../../models/baseCollectionPaginationCountResponse';
import { type ManagedAppPolicy } from '../../models/managedAppPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetManagedAppPoliciesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppPolicy[] | undefined;
}
