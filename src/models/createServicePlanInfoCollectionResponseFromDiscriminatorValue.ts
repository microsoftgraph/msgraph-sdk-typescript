import {ServicePlanInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePlanInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePlanInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePlanInfoCollectionResponse();
}
