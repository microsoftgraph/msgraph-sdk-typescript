import {deserializeIntoWorkingHours} from './deserializeIntoWorkingHours';
import {WorkingHours} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkingHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkingHours;
}
