import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DataPolicyOperation} from './dataPolicyOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DataPolicyOperation[] | undefined;
}
