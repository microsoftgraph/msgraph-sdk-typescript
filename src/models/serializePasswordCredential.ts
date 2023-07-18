import {PasswordCredential} from './passwordCredential';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializePasswordCredential(writer: SerializationWriter, passwordCredential: PasswordCredential | undefined = {} as PasswordCredential) : void {
        writer.writeStringValue("customKeyIdentifier", passwordCredential.customKeyIdentifier);
        writer.writeStringValue("displayName", passwordCredential.displayName);
        writer.writeDateValue("endDateTime", passwordCredential.endDateTime);
        writer.writeStringValue("hint", passwordCredential.hint);
        writer.writeGuidValue("keyId", passwordCredential.keyId);
        writer.writeStringValue("@odata.type", passwordCredential.odataType);
        writer.writeStringValue("secretText", passwordCredential.secretText);
        writer.writeDateValue("startDateTime", passwordCredential.startDateTime);
        writer.writeAdditionalData(passwordCredential.additionalData);
}
