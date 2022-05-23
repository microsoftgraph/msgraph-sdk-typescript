import {ScheduleInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleInformationImpl();
}
