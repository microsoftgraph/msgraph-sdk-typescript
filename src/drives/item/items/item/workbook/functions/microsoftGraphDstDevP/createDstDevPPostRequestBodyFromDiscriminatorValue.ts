import {DstDevPPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDstDevPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DstDevPPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DstDevPPostRequestBody();
}
