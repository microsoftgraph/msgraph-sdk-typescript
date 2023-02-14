import {DvarPPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDvarPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DvarPPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DvarPPostRequestBody();
}
