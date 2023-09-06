import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedAppOperation } from './managedAppOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedAppOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAppOperation[] | undefined;
}
