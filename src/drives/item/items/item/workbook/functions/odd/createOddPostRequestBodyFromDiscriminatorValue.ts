import {OddPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OddPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OddPostRequestBody();
}
