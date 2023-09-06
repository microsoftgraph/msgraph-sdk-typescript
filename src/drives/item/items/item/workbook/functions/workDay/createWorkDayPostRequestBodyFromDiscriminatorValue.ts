import { deserializeIntoWorkDayPostRequestBody } from './deserializeIntoWorkDayPostRequestBody';
import { type WorkDayPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkDayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkDayPostRequestBody;
}
