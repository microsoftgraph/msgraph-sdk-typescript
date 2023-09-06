import { deserializeIntoWeekdayPostRequestBody } from './deserializeIntoWeekdayPostRequestBody';
import { type WeekdayPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWeekdayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeekdayPostRequestBody;
}
