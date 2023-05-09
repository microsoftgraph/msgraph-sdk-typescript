import {deserializeIntoHourPostRequestBody} from './deserializeIntoHourPostRequestBody';
import {HourPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHourPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHourPostRequestBody;
}
