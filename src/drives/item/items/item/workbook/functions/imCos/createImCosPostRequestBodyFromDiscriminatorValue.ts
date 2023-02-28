import {ImCosPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImCosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImCosPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImCosPostRequestBody();
}
