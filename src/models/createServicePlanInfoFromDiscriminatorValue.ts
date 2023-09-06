import { deserializeIntoServicePlanInfo } from './deserializeIntoServicePlanInfo';
import { type ServicePlanInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePlanInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePlanInfo;
}
