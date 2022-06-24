import {ScheduleChangeRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleChangeRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleChangeRequestImpl();
}
