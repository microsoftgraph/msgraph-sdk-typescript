import {AssignLicensePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignLicensePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignLicensePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignLicensePostRequestBodyImpl();
}
