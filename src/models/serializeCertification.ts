import {Certification} from './certification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertification(certification: Certification | undefined = {} as Certification, writer: SerializationWriter) : void {
        writer.writeDateValue("certificationExpirationDateTime", certification.certificationExpirationDateTime);
        writer.writeBooleanValue("isPublisherAttested", certification.isPublisherAttested);
        writer.writeDateValue("lastCertificationDateTime", certification.lastCertificationDateTime);
        writer.writeStringValue("@odata.type", certification.odataType);
        writer.writeAdditionalData(certification.additionalData);
}
