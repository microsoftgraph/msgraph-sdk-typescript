import {CosPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CosPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CosPostRequestBody();
}
