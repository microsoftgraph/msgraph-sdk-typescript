import {ManagedDeviceEnrollmentTopFailuresWithPeriodResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceEnrollmentTopFailuresWithPeriodResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceEnrollmentTopFailuresWithPeriodResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceEnrollmentTopFailuresWithPeriodResponseMember1();
}
