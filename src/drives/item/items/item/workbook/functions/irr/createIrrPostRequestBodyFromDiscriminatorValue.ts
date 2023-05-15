import {deserializeIntoIrrPostRequestBody} from './deserializeIntoIrrPostRequestBody';
import {IrrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIrrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIrrPostRequestBody;
}
