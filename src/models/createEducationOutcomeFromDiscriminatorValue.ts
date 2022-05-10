import {EducationOutcomeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcomeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationOutcomeImpl();
}
