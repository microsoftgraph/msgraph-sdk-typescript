import {CountBlankPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountBlankPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountBlankPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountBlankPostRequestBody();
}
