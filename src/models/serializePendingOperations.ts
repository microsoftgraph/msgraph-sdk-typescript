import {PendingContentUpdate} from './pendingContentUpdate';
import {PendingOperations} from './pendingOperations';
import {serializePendingContentUpdate} from './serializePendingContentUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePendingOperations(writer: SerializationWriter, pendingOperations: PendingOperations | undefined = {} as PendingOperations) : void {
        writer.writeStringValue("@odata.type", pendingOperations.odataType);
        writer.writeObjectValue<PendingContentUpdate>("pendingContentUpdate", pendingOperations.pendingContentUpdate, serializePendingContentUpdate);
        writer.writeAdditionalData(pendingOperations.additionalData);
}
