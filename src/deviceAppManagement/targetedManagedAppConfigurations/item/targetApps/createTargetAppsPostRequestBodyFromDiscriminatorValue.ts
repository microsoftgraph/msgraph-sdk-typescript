import { deserializeIntoTargetAppsPostRequestBody } from './deserializeIntoTargetAppsPostRequestBody';
import { type TargetAppsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetAppsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetAppsPostRequestBody;
}
