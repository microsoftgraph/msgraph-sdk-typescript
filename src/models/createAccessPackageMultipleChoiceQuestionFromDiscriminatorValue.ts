import { deserializeIntoAccessPackageMultipleChoiceQuestion } from './deserializeIntoAccessPackageMultipleChoiceQuestion';
import { type AccessPackageMultipleChoiceQuestion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageMultipleChoiceQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageMultipleChoiceQuestion;
}
