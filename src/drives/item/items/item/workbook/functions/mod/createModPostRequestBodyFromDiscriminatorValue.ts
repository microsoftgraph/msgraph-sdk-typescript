import {deserializeIntoModPostRequestBody} from './deserializeIntoModPostRequestBody';
import {ModPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createModPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoModPostRequestBody;
}
