import {DdbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DdbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DdbPostRequestBody();
}
