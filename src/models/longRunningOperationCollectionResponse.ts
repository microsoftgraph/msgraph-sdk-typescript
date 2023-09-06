import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type LongRunningOperation } from './longRunningOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LongRunningOperation[] | undefined;
}
