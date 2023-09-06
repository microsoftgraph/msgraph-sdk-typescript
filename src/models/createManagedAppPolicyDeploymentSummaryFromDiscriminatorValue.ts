import { deserializeIntoManagedAppPolicyDeploymentSummary } from './deserializeIntoManagedAppPolicyDeploymentSummary';
import { type ManagedAppPolicyDeploymentSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppPolicyDeploymentSummary;
}
