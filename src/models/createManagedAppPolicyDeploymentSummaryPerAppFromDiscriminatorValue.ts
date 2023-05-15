import {deserializeIntoManagedAppPolicyDeploymentSummaryPerApp} from './deserializeIntoManagedAppPolicyDeploymentSummaryPerApp';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppPolicyDeploymentSummaryPerApp;
}
