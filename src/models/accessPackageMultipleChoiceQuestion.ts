import { type AccessPackageAnswerChoice } from './accessPackageAnswerChoice';
import { type AccessPackageQuestion } from './accessPackageQuestion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessPackageMultipleChoiceQuestion extends AccessPackageQuestion, Parsable {
    /**
     * List of answer choices.
     */
    choices?: AccessPackageAnswerChoice[] | undefined;
    /**
     * Indicates whether requestor can select multiple choices as their answer.
     */
    isMultipleSelectionAllowed?: boolean | undefined;
}
