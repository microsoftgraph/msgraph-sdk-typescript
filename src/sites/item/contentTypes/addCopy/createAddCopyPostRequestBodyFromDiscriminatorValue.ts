import {AddCopyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyPostRequestBody();
}
