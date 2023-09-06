import { type AccessPackageLocalizedText } from './accessPackageLocalizedText';
import { type AccessPackageQuestion } from './accessPackageQuestion';
import { createAccessPackageLocalizedTextFromDiscriminatorValue } from './createAccessPackageLocalizedTextFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAccessPackageLocalizedText } from './serializeAccessPackageLocalizedText';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageQuestion(accessPackageQuestion: AccessPackageQuestion | undefined = {} as AccessPackageQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageQuestion),
        "isAnswerEditable": n => { accessPackageQuestion.isAnswerEditable = n.getBooleanValue(); },
        "isRequired": n => { accessPackageQuestion.isRequired = n.getBooleanValue(); },
        "localizations": n => { accessPackageQuestion.localizations = n.getCollectionOfObjectValues<AccessPackageLocalizedText>(createAccessPackageLocalizedTextFromDiscriminatorValue); },
        "sequence": n => { accessPackageQuestion.sequence = n.getNumberValue(); },
        "text": n => { accessPackageQuestion.text = n.getStringValue(); },
    }
}
