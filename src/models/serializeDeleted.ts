import {Deleted} from './deleted';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleted(deleted: Deleted | undefined = {} as Deleted, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", deleted.odataType);
        writer.writeStringValue("state", deleted.state);
        writer.writeAdditionalData(deleted.additionalData);
}
