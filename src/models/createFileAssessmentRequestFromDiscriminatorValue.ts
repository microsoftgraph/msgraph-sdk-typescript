import {FileAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileAssessmentRequest();
}
