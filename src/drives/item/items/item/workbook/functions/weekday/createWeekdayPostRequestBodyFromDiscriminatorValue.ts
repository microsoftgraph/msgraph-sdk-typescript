import {deserializeIntoWeekdayPostRequestBody} from './deserializeIntoWeekdayPostRequestBody';
import {WeekdayPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWeekdayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeekdayPostRequestBody;
}
