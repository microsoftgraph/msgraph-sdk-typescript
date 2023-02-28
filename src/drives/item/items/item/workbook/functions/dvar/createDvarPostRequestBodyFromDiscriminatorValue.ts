import {DvarPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDvarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DvarPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DvarPostRequestBody();
}
