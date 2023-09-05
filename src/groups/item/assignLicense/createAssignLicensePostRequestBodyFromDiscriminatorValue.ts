import { deserializeIntoAssignLicensePostRequestBody } from './deserializeIntoAssignLicensePostRequestBody';
import { type AssignLicensePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignLicensePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignLicensePostRequestBody;
}
