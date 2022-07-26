import {AndroidCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidCompliancePolicy();
}
