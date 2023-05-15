import {deserializeIntoFindPostRequestBody} from './deserializeIntoFindPostRequestBody';
import {FindPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFindPostRequestBody;
}
