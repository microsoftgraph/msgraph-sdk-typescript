import {DismissPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDismissPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DismissPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DismissPostRequestBody();
}
