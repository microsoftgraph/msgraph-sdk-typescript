import {deserializeIntoErfPostRequestBody} from './deserializeIntoErfPostRequestBody';
import {ErfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createErfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErfPostRequestBody;
}
