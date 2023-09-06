import { type CommsOperation } from './commsOperation';
import { OperationStatus } from './operationStatus';
import { type ResultInfo } from './resultInfo';
import { serializeEntity } from './serializeEntity';
import { serializeResultInfo } from './serializeResultInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCommsOperation(writer: SerializationWriter, commsOperation: CommsOperation | undefined = {} as CommsOperation) : void {
        serializeEntity(writer, commsOperation)
        writer.writeStringValue("clientContext", commsOperation.clientContext);
        writer.writeObjectValue<ResultInfo>("resultInfo", commsOperation.resultInfo, serializeResultInfo);
        writer.writeEnumValue<OperationStatus>("status", commsOperation.status);
}
