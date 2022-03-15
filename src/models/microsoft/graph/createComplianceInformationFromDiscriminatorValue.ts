import {ComplianceInformation} from './complianceInformation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceInformation();
}
