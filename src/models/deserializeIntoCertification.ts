import {Certification} from './certification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertification(certification: Certification | undefined = {} as Certification) : Record<string, (node: ParseNode) => void> {
    return {
        "certificationDetailsUrl": n => { certification.certificationDetailsUrl = n.getStringValue(); },
        "certificationExpirationDateTime": n => { certification.certificationExpirationDateTime = n.getDateValue(); },
        "isCertifiedByMicrosoft": n => { certification.isCertifiedByMicrosoft = n.getBooleanValue(); },
        "isPublisherAttested": n => { certification.isPublisherAttested = n.getBooleanValue(); },
        "lastCertificationDateTime": n => { certification.lastCertificationDateTime = n.getDateValue(); },
        "@odata.type": n => { certification.odataType = n.getStringValue(); },
    }
}
