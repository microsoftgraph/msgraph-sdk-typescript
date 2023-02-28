import {IsOddPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsOddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsOddPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsOddPostRequestBody();
}
