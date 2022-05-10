import {WorkingHoursImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkingHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkingHoursImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkingHoursImpl();
}
