import { deserializeIntoProvisionedPlan } from './deserializeIntoProvisionedPlan';
import { type ProvisionedPlan } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisionedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionedPlan;
}
