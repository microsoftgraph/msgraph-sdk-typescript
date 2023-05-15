import {Identity} from './identity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(writer: SerializationWriter, identity: Identity | undefined = {} as Identity) : void {
        writer.writeStringValue("displayName", identity.displayName);
        writer.writeStringValue("id", identity.id);
        writer.writeStringValue("@odata.type", identity.odataType);
        writer.writeAdditionalData(identity.additionalData);
}
