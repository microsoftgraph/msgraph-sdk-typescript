import {SelfSignedCertificate} from './selfSignedCertificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSelfSignedCertificate(writer: SerializationWriter, selfSignedCertificate: SelfSignedCertificate | undefined = {} as SelfSignedCertificate) : void {
        writer.writeStringValue("customKeyIdentifier", selfSignedCertificate.customKeyIdentifier);
        writer.writeStringValue("displayName", selfSignedCertificate.displayName);
        writer.writeDateValue("endDateTime", selfSignedCertificate.endDateTime);
        writer.writeStringValue("key", selfSignedCertificate.key);
        writer.writeStringValue("keyId", selfSignedCertificate.keyId);
        writer.writeStringValue("@odata.type", selfSignedCertificate.odataType);
        writer.writeDateValue("startDateTime", selfSignedCertificate.startDateTime);
        writer.writeStringValue("thumbprint", selfSignedCertificate.thumbprint);
        writer.writeStringValue("type", selfSignedCertificate.type);
        writer.writeStringValue("usage", selfSignedCertificate.usage);
        writer.writeAdditionalData(selfSignedCertificate.additionalData);
}
