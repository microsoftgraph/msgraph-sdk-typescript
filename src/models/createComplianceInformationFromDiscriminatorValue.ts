import {ComplianceInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceInformationImpl();
}
