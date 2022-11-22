import {ProvisionedPlanCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedPlanCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionedPlanCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionedPlanCollectionResponse();
}
