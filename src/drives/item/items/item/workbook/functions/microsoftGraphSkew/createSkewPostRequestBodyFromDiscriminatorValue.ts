import {SkewPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkewPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkewPostRequestBody();
}
