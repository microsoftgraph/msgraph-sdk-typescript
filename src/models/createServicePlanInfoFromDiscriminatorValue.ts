import {ServicePlanInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePlanInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePlanInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePlanInfoImpl();
}
