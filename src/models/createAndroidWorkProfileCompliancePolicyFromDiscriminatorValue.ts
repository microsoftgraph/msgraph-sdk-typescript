import {deserializeIntoAndroidWorkProfileCompliancePolicy} from './deserializeIntoAndroidWorkProfileCompliancePolicy';
import {AndroidWorkProfileCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidWorkProfileCompliancePolicy;
}
