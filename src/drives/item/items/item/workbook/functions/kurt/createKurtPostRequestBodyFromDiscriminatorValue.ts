import {deserializeIntoKurtPostRequestBody} from './deserializeIntoKurtPostRequestBody';
import {KurtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKurtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKurtPostRequestBody;
}
