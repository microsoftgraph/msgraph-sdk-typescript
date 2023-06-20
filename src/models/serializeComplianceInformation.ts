import {CertificationControl} from './certificationControl';
import {ComplianceInformation} from './complianceInformation';
import {serializeCertificationControl} from './serializeCertificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceInformation(complianceInformation: ComplianceInformation | undefined = {} as ComplianceInformation, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<CertificationControl>("certificationControls", complianceInformation.certificationControls, serializeCertificationControl);
        writer.writeStringValue("certificationName", complianceInformation.certificationName);
        writer.writeStringValue("@odata.type", complianceInformation.odataType);
        writer.writeAdditionalData(complianceInformation.additionalData);
}
