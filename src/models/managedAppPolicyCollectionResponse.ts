import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedAppPolicy } from './managedAppPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppPolicy[] | undefined;
}
