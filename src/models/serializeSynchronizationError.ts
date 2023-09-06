import { type SynchronizationError } from './synchronizationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationError(writer: SerializationWriter, synchronizationError: SynchronizationError | undefined = {} as SynchronizationError) : void {
        writer.writeStringValue("code", synchronizationError.code);
        writer.writeStringValue("message", synchronizationError.message);
        writer.writeStringValue("@odata.type", synchronizationError.odataType);
        writer.writeBooleanValue("tenantActionable", synchronizationError.tenantActionable);
        writer.writeAdditionalData(synchronizationError.additionalData);
}
