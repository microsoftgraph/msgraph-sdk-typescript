import {Identity} from './identity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(identity: Identity | undefined = {} as Identity, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", identity.displayName);
        writer.writeStringValue("id", identity.id);
        writer.writeStringValue("@odata.type", identity.odataType);
        writer.writeAdditionalData(identity.additionalData);
}
