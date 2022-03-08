import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyDeploymentSummaryPerApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyDeploymentSummaryPerApp();
}
