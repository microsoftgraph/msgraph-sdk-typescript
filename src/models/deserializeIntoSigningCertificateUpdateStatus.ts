import { type SigningCertificateUpdateStatus } from './signingCertificateUpdateStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSigningCertificateUpdateStatus(signingCertificateUpdateStatus: SigningCertificateUpdateStatus | undefined = {} as SigningCertificateUpdateStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateUpdateResult": n => { signingCertificateUpdateStatus.certificateUpdateResult = n.getStringValue(); },
        "lastRunDateTime": n => { signingCertificateUpdateStatus.lastRunDateTime = n.getDateValue(); },
        "@odata.type": n => { signingCertificateUpdateStatus.odataType = n.getStringValue(); },
    }
}
