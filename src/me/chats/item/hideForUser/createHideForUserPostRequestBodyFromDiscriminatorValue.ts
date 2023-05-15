import {deserializeIntoHideForUserPostRequestBody} from './deserializeIntoHideForUserPostRequestBody';
import {HideForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHideForUserPostRequestBody;
}
