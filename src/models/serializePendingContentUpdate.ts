import { type PendingContentUpdate } from './pendingContentUpdate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePendingContentUpdate(writer: SerializationWriter, pendingContentUpdate: PendingContentUpdate | undefined = {} as PendingContentUpdate) : void {
        writer.writeStringValue("@odata.type", pendingContentUpdate.odataType);
        writer.writeDateValue("queuedDateTime", pendingContentUpdate.queuedDateTime);
        writer.writeAdditionalData(pendingContentUpdate.additionalData);
}
