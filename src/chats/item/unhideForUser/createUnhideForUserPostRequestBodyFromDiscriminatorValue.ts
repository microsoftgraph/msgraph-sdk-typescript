import {deserializeIntoUnhideForUserPostRequestBody} from './deserializeIntoUnhideForUserPostRequestBody';
import {UnhideForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnhideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnhideForUserPostRequestBody;
}
