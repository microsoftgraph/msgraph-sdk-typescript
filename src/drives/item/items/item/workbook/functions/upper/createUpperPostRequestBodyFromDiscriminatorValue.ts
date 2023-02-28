import {UpperPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpperPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpperPostRequestBody();
}
