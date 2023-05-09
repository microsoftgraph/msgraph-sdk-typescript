import {deserializeIntoIpmtPostRequestBody} from './deserializeIntoIpmtPostRequestBody';
import {IpmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpmtPostRequestBody;
}
