import {AssignLicensePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignLicensePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignLicensePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignLicensePostRequestBody();
}
