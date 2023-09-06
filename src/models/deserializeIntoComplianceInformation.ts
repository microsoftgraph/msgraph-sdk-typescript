import { type CertificationControl } from './certificationControl';
import { type ComplianceInformation } from './complianceInformation';
import { createCertificationControlFromDiscriminatorValue } from './createCertificationControlFromDiscriminatorValue';
import { serializeCertificationControl } from './serializeCertificationControl';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceInformation(complianceInformation: ComplianceInformation | undefined = {} as ComplianceInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "certificationControls": n => { complianceInformation.certificationControls = n.getCollectionOfObjectValues<CertificationControl>(createCertificationControlFromDiscriminatorValue); },
        "certificationName": n => { complianceInformation.certificationName = n.getStringValue(); },
        "@odata.type": n => { complianceInformation.odataType = n.getStringValue(); },
    }
}
