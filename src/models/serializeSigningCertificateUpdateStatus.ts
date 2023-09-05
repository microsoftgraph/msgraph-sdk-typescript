import { type SigningCertificateUpdateStatus } from './signingCertificateUpdateStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSigningCertificateUpdateStatus(writer: SerializationWriter, signingCertificateUpdateStatus: SigningCertificateUpdateStatus | undefined = {} as SigningCertificateUpdateStatus) : void {
        writer.writeStringValue("certificateUpdateResult", signingCertificateUpdateStatus.certificateUpdateResult);
        writer.writeDateValue("lastRunDateTime", signingCertificateUpdateStatus.lastRunDateTime);
        writer.writeStringValue("@odata.type", signingCertificateUpdateStatus.odataType);
        writer.writeAdditionalData(signingCertificateUpdateStatus.additionalData);
}
