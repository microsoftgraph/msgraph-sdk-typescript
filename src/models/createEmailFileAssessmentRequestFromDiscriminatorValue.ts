import {deserializeIntoEmailFileAssessmentRequest} from './deserializeIntoEmailFileAssessmentRequest';
import {EmailFileAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailFileAssessmentRequest;
}
