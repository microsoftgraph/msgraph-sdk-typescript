import {OnPremisesProvisioningErrorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesProvisioningErrorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesProvisioningErrorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesProvisioningErrorCollectionResponse();
}
