import {deserializeIntoRestartPostRequestBody} from './deserializeIntoRestartPostRequestBody';
import {RestartPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestartPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRestartPostRequestBody;
}
