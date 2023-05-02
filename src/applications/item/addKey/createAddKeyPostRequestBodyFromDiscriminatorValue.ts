import {deserializeIntoAddKeyPostRequestBody} from './deserializeIntoAddKeyPostRequestBody';
import {AddKeyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddKeyPostRequestBody;
}
