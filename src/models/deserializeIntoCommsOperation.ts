import {CommsOperation} from './commsOperation';
import {createResultInfoFromDiscriminatorValue} from './createResultInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OperationStatus} from './operationStatus';
import {ResultInfo} from './resultInfo';
import {serializeResultInfo} from './serializeResultInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsOperation(commsOperation: CommsOperation | undefined = {} as CommsOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(commsOperation),
        "clientContext": n => { commsOperation.clientContext = n.getStringValue(); },
        "resultInfo": n => { commsOperation.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
        "status": n => { commsOperation.status = n.getEnumValue<OperationStatus>(OperationStatus); },
    }
}
