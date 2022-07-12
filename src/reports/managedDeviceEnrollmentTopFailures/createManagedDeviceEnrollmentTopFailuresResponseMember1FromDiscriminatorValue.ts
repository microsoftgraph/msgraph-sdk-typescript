import {ManagedDeviceEnrollmentTopFailuresResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceEnrollmentTopFailuresResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceEnrollmentTopFailuresResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceEnrollmentTopFailuresResponseMember1();
}
