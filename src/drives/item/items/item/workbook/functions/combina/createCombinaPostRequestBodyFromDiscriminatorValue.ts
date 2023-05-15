import {deserializeIntoCombinaPostRequestBody} from './deserializeIntoCombinaPostRequestBody';
import {CombinaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCombinaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCombinaPostRequestBody;
}
