import {ManagedAppPolicyDeploymentSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyDeploymentSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyDeploymentSummaryImpl();
}
