import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LongRunningOperation} from './longRunningOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: LongRunningOperation[] | undefined;
}
