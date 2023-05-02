import {deserializeIntoScheduleInformation} from './deserializeIntoScheduleInformation';
import {ScheduleInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScheduleInformation;
}
