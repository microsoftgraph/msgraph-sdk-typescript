import {ProvisionedPlanImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionedPlanImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionedPlanImpl();
}
