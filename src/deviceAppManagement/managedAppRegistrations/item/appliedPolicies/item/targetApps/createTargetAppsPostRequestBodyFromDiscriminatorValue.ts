import {deserializeIntoTargetAppsPostRequestBody} from './deserializeIntoTargetAppsPostRequestBody';
import {TargetAppsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetAppsPostRequestBody;
}
