import {AccessPackageMultipleChoiceQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageMultipleChoiceQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageMultipleChoiceQuestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageMultipleChoiceQuestion();
}
