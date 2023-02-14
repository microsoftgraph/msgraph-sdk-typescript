import {Beta_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBeta_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Beta_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Beta_DistPostRequestBody();
}
