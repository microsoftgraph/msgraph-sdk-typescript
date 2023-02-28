import {KurtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKurtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : KurtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KurtPostRequestBody();
}
