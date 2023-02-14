import {DstDevPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDstDevPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DstDevPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DstDevPostRequestBody();
}
