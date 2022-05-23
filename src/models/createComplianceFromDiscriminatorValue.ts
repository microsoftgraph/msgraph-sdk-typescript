import {ComplianceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceImpl();
}
