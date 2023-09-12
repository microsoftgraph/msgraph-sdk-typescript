import { deserializeIntoWorkingHours } from './deserializeIntoWorkingHours';
import { type WorkingHours } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkingHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkingHours;
}
