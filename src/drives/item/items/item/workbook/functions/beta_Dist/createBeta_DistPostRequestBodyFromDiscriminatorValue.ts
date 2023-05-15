import {deserializeIntoBeta_DistPostRequestBody} from './deserializeIntoBeta_DistPostRequestBody';
import {Beta_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBeta_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBeta_DistPostRequestBody;
}
