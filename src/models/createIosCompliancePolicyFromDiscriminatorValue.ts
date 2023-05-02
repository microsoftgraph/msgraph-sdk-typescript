import {deserializeIntoIosCompliancePolicy} from './deserializeIntoIosCompliancePolicy';
import {IosCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosCompliancePolicy;
}
