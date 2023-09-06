import { deserializeIntoAssignSensitivityLabelPostRequestBody } from './deserializeIntoAssignSensitivityLabelPostRequestBody';
import { type AssignSensitivityLabelPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignSensitivityLabelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignSensitivityLabelPostRequestBody;
}
