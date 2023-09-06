import { deserializeIntoWeekNumPostRequestBody } from './deserializeIntoWeekNumPostRequestBody';
import { type WeekNumPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWeekNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeekNumPostRequestBody;
}
