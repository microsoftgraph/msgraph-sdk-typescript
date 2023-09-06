import { deserializeIntoScheduleInformation } from './deserializeIntoScheduleInformation';
import { type ScheduleInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScheduleInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScheduleInformation;
}
