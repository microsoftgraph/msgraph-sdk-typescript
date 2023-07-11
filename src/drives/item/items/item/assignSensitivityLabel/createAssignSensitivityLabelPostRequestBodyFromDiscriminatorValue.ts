import {deserializeIntoAssignSensitivityLabelPostRequestBody} from './deserializeIntoAssignSensitivityLabelPostRequestBody';
import {AssignSensitivityLabelPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignSensitivityLabelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignSensitivityLabelPostRequestBody;
}
