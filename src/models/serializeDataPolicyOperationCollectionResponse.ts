import { type DataPolicyOperation } from './dataPolicyOperation';
import { type DataPolicyOperationCollectionResponse } from './dataPolicyOperationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDataPolicyOperation } from './serializeDataPolicyOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDataPolicyOperationCollectionResponse(writer: SerializationWriter, dataPolicyOperationCollectionResponse: DataPolicyOperationCollectionResponse | undefined = {} as DataPolicyOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataPolicyOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<DataPolicyOperation>("value", dataPolicyOperationCollectionResponse.value, serializeDataPolicyOperation);
}
