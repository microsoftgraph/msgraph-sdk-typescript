import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DataPolicyOperation } from './dataPolicyOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DataPolicyOperation[] | undefined;
}
