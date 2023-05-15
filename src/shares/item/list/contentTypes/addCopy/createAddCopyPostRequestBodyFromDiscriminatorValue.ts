import {deserializeIntoAddCopyPostRequestBody} from './deserializeIntoAddCopyPostRequestBody';
import {AddCopyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddCopyPostRequestBody;
}
