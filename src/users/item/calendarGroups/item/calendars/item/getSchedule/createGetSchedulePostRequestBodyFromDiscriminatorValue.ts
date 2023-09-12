import { deserializeIntoGetSchedulePostRequestBody } from './deserializeIntoGetSchedulePostRequestBody';
import { type GetSchedulePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetSchedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetSchedulePostRequestBody;
}
