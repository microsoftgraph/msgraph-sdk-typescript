import {deserializeIntoCalendarGroup} from './deserializeIntoCalendarGroup';
import {CalendarGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalendarGroup;
}
