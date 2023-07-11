import {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import {AccessPackageQuestion} from './accessPackageQuestion';
import {Parsable} from '@microsoft/kiota-abstractions';

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
