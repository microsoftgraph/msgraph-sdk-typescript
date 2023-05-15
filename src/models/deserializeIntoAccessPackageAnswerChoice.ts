import {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {createAccessPackageLocalizedTextFromDiscriminatorValue} from './createAccessPackageLocalizedTextFromDiscriminatorValue';
import {serializeAccessPackageLocalizedText} from './serializeAccessPackageLocalizedText';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAnswerChoice(accessPackageAnswerChoice: AccessPackageAnswerChoice | undefined = {} as AccessPackageAnswerChoice) : Record<string, (node: ParseNode) => void> {
    return {
        "actualValue": n => { accessPackageAnswerChoice.actualValue = n.getStringValue(); },
        "localizations": n => { accessPackageAnswerChoice.localizations = n.getCollectionOfObjectValues<AccessPackageLocalizedText>(createAccessPackageLocalizedTextFromDiscriminatorValue); },
        "@odata.type": n => { accessPackageAnswerChoice.odataType = n.getStringValue(); },
        "text": n => { accessPackageAnswerChoice.text = n.getStringValue(); },
    }
}
