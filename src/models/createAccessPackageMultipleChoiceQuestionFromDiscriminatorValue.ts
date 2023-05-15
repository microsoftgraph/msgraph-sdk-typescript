import {deserializeIntoAccessPackageMultipleChoiceQuestion} from './deserializeIntoAccessPackageMultipleChoiceQuestion';
import {AccessPackageMultipleChoiceQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageMultipleChoiceQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageMultipleChoiceQuestion;
}
