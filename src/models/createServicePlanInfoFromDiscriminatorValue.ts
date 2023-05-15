import {deserializeIntoServicePlanInfo} from './deserializeIntoServicePlanInfo';
import {ServicePlanInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePlanInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePlanInfo;
}
