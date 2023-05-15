import {deserializeIntoDurationPostRequestBody} from './deserializeIntoDurationPostRequestBody';
import {DurationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDurationPostRequestBody;
}
