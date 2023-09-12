import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ResourceOperation } from './resourceOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ResourceOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ResourceOperation[] | undefined;
}
