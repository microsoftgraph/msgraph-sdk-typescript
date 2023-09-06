import { type Certification } from './certification';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCertification(writer: SerializationWriter, certification: Certification | undefined = {} as Certification) : void {
        writer.writeDateValue("certificationExpirationDateTime", certification.certificationExpirationDateTime);
        writer.writeBooleanValue("isPublisherAttested", certification.isPublisherAttested);
        writer.writeDateValue("lastCertificationDateTime", certification.lastCertificationDateTime);
        writer.writeStringValue("@odata.type", certification.odataType);
        writer.writeAdditionalData(certification.additionalData);
}
