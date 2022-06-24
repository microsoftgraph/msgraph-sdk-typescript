import {EmailFileAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailFileAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailFileAssessmentRequestImpl();
}
