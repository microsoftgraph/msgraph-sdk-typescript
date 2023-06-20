import {DataPolicyOperation} from './dataPolicyOperation';
import {DataPolicyOperationCollectionResponse} from './dataPolicyOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDataPolicyOperation} from './serializeDataPolicyOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataPolicyOperationCollectionResponse(dataPolicyOperationCollectionResponse: DataPolicyOperationCollectionResponse | undefined = {} as DataPolicyOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataPolicyOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<DataPolicyOperation>("value", dataPolicyOperationCollectionResponse.value, serializeDataPolicyOperation);
}
