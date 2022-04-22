import {RequestSchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestSchedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequestSchedule();
}
