import {VdbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : VdbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VdbPostRequestBody();
}
