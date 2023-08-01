import type {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import type {AccessPackageMultipleChoiceQuestion} from './accessPackageMultipleChoiceQuestion';
import {serializeAccessPackageAnswerChoice} from './serializeAccessPackageAnswerChoice';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageMultipleChoiceQuestion(writer: SerializationWriter, accessPackageMultipleChoiceQuestion: AccessPackageMultipleChoiceQuestion | undefined = {} as AccessPackageMultipleChoiceQuestion) : void {
        serializeAccessPackageQuestion(writer, accessPackageMultipleChoiceQuestion)
        writer.writeCollectionOfObjectValues<AccessPackageAnswerChoice>("choices", accessPackageMultipleChoiceQuestion.choices, serializeAccessPackageAnswerChoice);
        writer.writeBooleanValue("isMultipleSelectionAllowed", accessPackageMultipleChoiceQuestion.isMultipleSelectionAllowed);
}
