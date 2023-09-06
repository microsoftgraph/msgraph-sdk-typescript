import { type Deleted } from './deleted';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeleted(writer: SerializationWriter, deleted: Deleted | undefined = {} as Deleted) : void {
        writer.writeStringValue("@odata.type", deleted.odataType);
        writer.writeStringValue("state", deleted.state);
        writer.writeAdditionalData(deleted.additionalData);
}
