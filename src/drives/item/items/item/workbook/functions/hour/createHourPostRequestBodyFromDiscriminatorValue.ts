import { deserializeIntoHourPostRequestBody } from './deserializeIntoHourPostRequestBody';
import { type HourPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHourPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHourPostRequestBody;
}
