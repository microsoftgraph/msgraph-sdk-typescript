import { deserializeIntoComplianceInformation } from './deserializeIntoComplianceInformation';
import { type ComplianceInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createComplianceInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceInformation;
}
