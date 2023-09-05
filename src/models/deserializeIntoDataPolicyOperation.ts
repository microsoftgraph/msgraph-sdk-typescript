import { type DataPolicyOperation } from './dataPolicyOperation';
import { DataPolicyOperationStatus } from './dataPolicyOperationStatus';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDataPolicyOperation(dataPolicyOperation: DataPolicyOperation | undefined = {} as DataPolicyOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(dataPolicyOperation),
        "completedDateTime": n => { dataPolicyOperation.completedDateTime = n.getDateValue(); },
        "progress": n => { dataPolicyOperation.progress = n.getNumberValue(); },
        "status": n => { dataPolicyOperation.status = n.getEnumValue<DataPolicyOperationStatus>(DataPolicyOperationStatus); },
        "storageLocation": n => { dataPolicyOperation.storageLocation = n.getStringValue(); },
        "submittedDateTime": n => { dataPolicyOperation.submittedDateTime = n.getDateValue(); },
        "userId": n => { dataPolicyOperation.userId = n.getStringValue(); },
    }
}
