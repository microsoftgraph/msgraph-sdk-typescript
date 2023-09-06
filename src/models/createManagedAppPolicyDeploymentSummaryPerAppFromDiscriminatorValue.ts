import { deserializeIntoManagedAppPolicyDeploymentSummaryPerApp } from './deserializeIntoManagedAppPolicyDeploymentSummaryPerApp';
import { type ManagedAppPolicyDeploymentSummaryPerApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppPolicyDeploymentSummaryPerApp;
}
