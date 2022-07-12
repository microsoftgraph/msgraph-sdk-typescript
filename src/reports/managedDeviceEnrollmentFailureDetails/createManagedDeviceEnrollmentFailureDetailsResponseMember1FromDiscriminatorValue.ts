import {ManagedDeviceEnrollmentFailureDetailsResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceEnrollmentFailureDetailsResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceEnrollmentFailureDetailsResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceEnrollmentFailureDetailsResponseMember1();
}
