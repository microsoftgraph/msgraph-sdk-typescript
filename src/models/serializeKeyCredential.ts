import {KeyCredential} from './keyCredential';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyCredential(keyCredential: KeyCredential | undefined = {} as KeyCredential, writer: SerializationWriter) : void {
        writer.writeStringValue("customKeyIdentifier", keyCredential.customKeyIdentifier);
        writer.writeStringValue("displayName", keyCredential.displayName);
        writer.writeDateValue("endDateTime", keyCredential.endDateTime);
        writer.writeStringValue("key", keyCredential.key);
        writer.writeStringValue("keyId", keyCredential.keyId);
        writer.writeStringValue("@odata.type", keyCredential.odataType);
        writer.writeDateValue("startDateTime", keyCredential.startDateTime);
        writer.writeStringValue("type", keyCredential.type);
        writer.writeStringValue("usage", keyCredential.usage);
        writer.writeAdditionalData(keyCredential.additionalData);
}
