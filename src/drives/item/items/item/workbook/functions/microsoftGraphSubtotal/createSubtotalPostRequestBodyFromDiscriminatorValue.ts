import {SubtotalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubtotalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubtotalPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubtotalPostRequestBody();
}
