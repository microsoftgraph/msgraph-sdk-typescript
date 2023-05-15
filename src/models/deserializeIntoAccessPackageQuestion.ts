import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {AccessPackageQuestion} from './accessPackageQuestion';
import {createAccessPackageLocalizedTextFromDiscriminatorValue} from './createAccessPackageLocalizedTextFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageLocalizedText} from './serializeAccessPackageLocalizedText';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
