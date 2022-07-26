import {AndroidWorkProfileCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCompliancePolicy();
}
