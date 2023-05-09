import {deserializeIntoDismissPostRequestBody} from './deserializeIntoDismissPostRequestBody';
import {DismissPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDismissPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDismissPostRequestBody;
}
