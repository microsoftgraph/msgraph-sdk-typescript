import {EducationSubmissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionImpl();
}
