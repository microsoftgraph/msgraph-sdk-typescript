import {RightbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRightbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RightbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RightbPostRequestBody();
}
