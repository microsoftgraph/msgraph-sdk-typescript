import {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import {AccessPackageMultipleChoiceQuestion} from './accessPackageMultipleChoiceQuestion';
import {createAccessPackageAnswerChoiceFromDiscriminatorValue} from './createAccessPackageAnswerChoiceFromDiscriminatorValue';
import {deserializeIntoAccessPackageQuestion} from './deserializeIntoAccessPackageQuestion';
import {serializeAccessPackageAnswerChoice} from './serializeAccessPackageAnswerChoice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageMultipleChoiceQuestion(accessPackageMultipleChoiceQuestion: AccessPackageMultipleChoiceQuestion | undefined = {} as AccessPackageMultipleChoiceQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessPackageQuestion(accessPackageMultipleChoiceQuestion),
        "choices": n => { accessPackageMultipleChoiceQuestion.choices = n.getCollectionOfObjectValues<AccessPackageAnswerChoice>(createAccessPackageAnswerChoiceFromDiscriminatorValue); },
        "isMultipleSelectionAllowed": n => { accessPackageMultipleChoiceQuestion.isMultipleSelectionAllowed = n.getBooleanValue(); },
    }
}
