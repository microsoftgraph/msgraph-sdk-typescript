import {ProvisioningStepCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningStepCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningStepCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningStepCollectionResponse();
}
