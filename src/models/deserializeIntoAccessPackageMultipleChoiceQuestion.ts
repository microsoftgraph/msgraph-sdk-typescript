import { type AccessPackageAnswerChoice } from './accessPackageAnswerChoice';
import { type AccessPackageMultipleChoiceQuestion } from './accessPackageMultipleChoiceQuestion';
import { createAccessPackageAnswerChoiceFromDiscriminatorValue } from './createAccessPackageAnswerChoiceFromDiscriminatorValue';
import { deserializeIntoAccessPackageQuestion } from './deserializeIntoAccessPackageQuestion';
import { serializeAccessPackageAnswerChoice } from './serializeAccessPackageAnswerChoice';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageMultipleChoiceQuestion(accessPackageMultipleChoiceQuestion: AccessPackageMultipleChoiceQuestion | undefined = {} as AccessPackageMultipleChoiceQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessPackageQuestion(accessPackageMultipleChoiceQuestion),
        "choices": n => { accessPackageMultipleChoiceQuestion.choices = n.getCollectionOfObjectValues<AccessPackageAnswerChoice>(createAccessPackageAnswerChoiceFromDiscriminatorValue); },
        "isMultipleSelectionAllowed": n => { accessPackageMultipleChoiceQuestion.isMultipleSelectionAllowed = n.getBooleanValue(); },
    }
}
