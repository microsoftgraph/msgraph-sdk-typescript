import {CalculatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalculatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalculatePostRequestBody();
}
