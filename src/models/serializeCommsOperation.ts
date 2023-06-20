import {CommsOperation} from './commsOperation';
import {OperationStatus} from './operationStatus';
import {ResultInfo} from './resultInfo';
import {serializeEntity} from './serializeEntity';
import {serializeResultInfo} from './serializeResultInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsOperation(commsOperation: CommsOperation | undefined = {} as CommsOperation, writer: SerializationWriter) : void {
        serializeEntity(writer, commsOperation)
        writer.writeStringValue("clientContext", commsOperation.clientContext);
        writer.writeObjectValue<ResultInfo>("resultInfo", commsOperation.resultInfo, serializeResultInfo);
        writer.writeEnumValue<OperationStatus>("status", commsOperation.status);
}
