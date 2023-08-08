import type {CertificationControl} from './certificationControl';
import type {ComplianceInformation} from './complianceInformation';
import {serializeCertificationControl} from './serializeCertificationControl';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceInformation(writer: SerializationWriter, complianceInformation: ComplianceInformation | undefined = {} as ComplianceInformation) : void {
        writer.writeCollectionOfObjectValues<CertificationControl>("certificationControls", complianceInformation.certificationControls, serializeCertificationControl);
        writer.writeStringValue("certificationName", complianceInformation.certificationName);
        writer.writeStringValue("@odata.type", complianceInformation.odataType);
        writer.writeAdditionalData(complianceInformation.additionalData);
}
