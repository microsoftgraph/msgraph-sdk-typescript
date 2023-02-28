import {OrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrPostRequestBody();
}
