import {createDataPolicyOperationFromDiscriminatorValue} from './createDataPolicyOperationFromDiscriminatorValue';
import type {DataPolicyOperation} from './dataPolicyOperation';
import type {DataPolicyOperationCollectionResponse} from './dataPolicyOperationCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDataPolicyOperation} from './serializeDataPolicyOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataPolicyOperationCollectionResponse(dataPolicyOperationCollectionResponse: DataPolicyOperationCollectionResponse | undefined = {} as DataPolicyOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(dataPolicyOperationCollectionResponse),
        "value": n => { dataPolicyOperationCollectionResponse.value = n.getCollectionOfObjectValues<DataPolicyOperation>(createDataPolicyOperationFromDiscriminatorValue); },
    }
}
