import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedAppPolicy} from './managedAppPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppPolicy[] | undefined;
}
