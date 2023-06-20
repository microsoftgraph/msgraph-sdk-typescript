import {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import {AccessPackageMultipleChoiceQuestion} from './accessPackageMultipleChoiceQuestion';
import {serializeAccessPackageAnswerChoice} from './serializeAccessPackageAnswerChoice';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageMultipleChoiceQuestion(accessPackageMultipleChoiceQuestion: AccessPackageMultipleChoiceQuestion | undefined = {} as AccessPackageMultipleChoiceQuestion, writer: SerializationWriter) : void {
        serializeAccessPackageQuestion(writer, accessPackageMultipleChoiceQuestion)
        writer.writeCollectionOfObjectValues<AccessPackageAnswerChoice>("choices", accessPackageMultipleChoiceQuestion.choices, serializeAccessPackageAnswerChoice);
        writer.writeBooleanValue("isMultipleSelectionAllowed", accessPackageMultipleChoiceQuestion.isMultipleSelectionAllowed);
}
