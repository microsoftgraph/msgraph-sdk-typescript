import { deserializeIntoHideForUserPostRequestBody } from './deserializeIntoHideForUserPostRequestBody';
import { type HideForUserPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHideForUserPostRequestBody;
}
