import {TextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TextPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TextPostRequestBody();
}
