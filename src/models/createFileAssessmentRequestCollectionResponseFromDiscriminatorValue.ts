import {FileAssessmentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileAssessmentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileAssessmentRequestCollectionResponse();
}
