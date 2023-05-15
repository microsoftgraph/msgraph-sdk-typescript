import {deserializeIntoWeekNumPostRequestBody} from './deserializeIntoWeekNumPostRequestBody';
import {WeekNumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWeekNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeekNumPostRequestBody;
}
