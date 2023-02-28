import {ReplacePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplacePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplacePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplacePostRequestBody();
}
