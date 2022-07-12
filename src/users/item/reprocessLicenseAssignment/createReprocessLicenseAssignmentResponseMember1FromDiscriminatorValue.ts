import {ReprocessLicenseAssignmentResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReprocessLicenseAssignmentResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReprocessLicenseAssignmentResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReprocessLicenseAssignmentResponseMember1();
}
