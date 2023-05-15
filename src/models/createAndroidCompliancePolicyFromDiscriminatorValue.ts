import {deserializeIntoAndroidCompliancePolicy} from './deserializeIntoAndroidCompliancePolicy';
import {AndroidCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidCompliancePolicy;
}
