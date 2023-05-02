import {deserializeIntoComplianceInformation} from './deserializeIntoComplianceInformation';
import {ComplianceInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceInformation;
}
