import {Floor_MathPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFloor_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Floor_MathPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Floor_MathPostRequestBody();
}
