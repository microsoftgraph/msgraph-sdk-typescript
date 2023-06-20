import {LongRunningOperation} from './longRunningOperation';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLongRunningOperation(longRunningOperation: LongRunningOperation | undefined = {} as LongRunningOperation, writer: SerializationWriter) : void {
        serializeEntity(writer, longRunningOperation)
        writer.writeDateValue("createdDateTime", longRunningOperation.createdDateTime);
        writer.writeDateValue("lastActionDateTime", longRunningOperation.lastActionDateTime);
        writer.writeStringValue("resourceLocation", longRunningOperation.resourceLocation);
        writer.writeEnumValue<LongRunningOperationStatus>("status", longRunningOperation.status);
        writer.writeStringValue("statusDetail", longRunningOperation.statusDetail);
}
