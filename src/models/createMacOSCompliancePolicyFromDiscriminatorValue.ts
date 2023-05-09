import {deserializeIntoMacOSCompliancePolicy} from './deserializeIntoMacOSCompliancePolicy';
import {MacOSCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSCompliancePolicy;
}
