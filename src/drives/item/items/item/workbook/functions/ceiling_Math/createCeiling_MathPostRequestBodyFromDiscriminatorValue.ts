import {Ceiling_MathPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCeiling_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ceiling_MathPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ceiling_MathPostRequestBody();
}
