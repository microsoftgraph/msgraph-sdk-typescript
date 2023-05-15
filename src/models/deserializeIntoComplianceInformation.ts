import {CertificationControl} from './certificationControl';
import {ComplianceInformation} from './complianceInformation';
import {createCertificationControlFromDiscriminatorValue} from './createCertificationControlFromDiscriminatorValue';
import {serializeCertificationControl} from './serializeCertificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceInformation(complianceInformation: ComplianceInformation | undefined = {} as ComplianceInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "certificationControls": n => { complianceInformation.certificationControls = n.getCollectionOfObjectValues<CertificationControl>(createCertificationControlFromDiscriminatorValue); },
        "certificationName": n => { complianceInformation.certificationName = n.getStringValue(); },
        "@odata.type": n => { complianceInformation.odataType = n.getStringValue(); },
    }
}
