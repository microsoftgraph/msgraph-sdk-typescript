import {CodePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCodePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CodePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CodePostRequestBody();
}
