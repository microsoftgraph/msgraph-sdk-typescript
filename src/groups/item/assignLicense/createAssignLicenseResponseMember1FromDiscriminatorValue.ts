import {AssignLicenseResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignLicenseResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignLicenseResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignLicenseResponseMember1();
}
