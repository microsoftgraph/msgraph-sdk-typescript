import {IsrefPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsrefPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsrefPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsrefPostRequestBody();
}
