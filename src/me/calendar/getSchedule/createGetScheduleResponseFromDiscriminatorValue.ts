import { deserializeIntoGetScheduleResponse } from './deserializeIntoGetScheduleResponse';
import { type GetScheduleResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetScheduleResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetScheduleResponse;
}
