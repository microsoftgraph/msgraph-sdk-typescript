import {Beta_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBeta_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Beta_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Beta_InvPostRequestBody();
}
