import {deserializeIntoLenbPostRequestBody} from './deserializeIntoLenbPostRequestBody';
import {LenbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLenbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLenbPostRequestBody;
}
