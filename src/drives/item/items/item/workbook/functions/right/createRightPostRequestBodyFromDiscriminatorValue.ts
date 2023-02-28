import {RightPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRightPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RightPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RightPostRequestBody();
}
