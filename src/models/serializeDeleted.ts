import {Deleted} from './deleted';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleted(writer: SerializationWriter, deleted: Deleted | undefined = {} as Deleted) : void {
        writer.writeStringValue("@odata.type", deleted.odataType);
        writer.writeStringValue("state", deleted.state);
        writer.writeAdditionalData(deleted.additionalData);
}
