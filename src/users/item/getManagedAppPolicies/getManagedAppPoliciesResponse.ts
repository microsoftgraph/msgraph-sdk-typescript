import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {ManagedAppPolicy} from '../../../models/managedAppPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetManagedAppPoliciesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ManagedAppPolicy[] | undefined;
}
