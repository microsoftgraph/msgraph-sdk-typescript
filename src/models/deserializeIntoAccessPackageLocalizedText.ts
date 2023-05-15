import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageLocalizedText(accessPackageLocalizedText: AccessPackageLocalizedText | undefined = {} as AccessPackageLocalizedText) : Record<string, (node: ParseNode) => void> {
    return {
        "languageCode": n => { accessPackageLocalizedText.languageCode = n.getStringValue(); },
        "@odata.type": n => { accessPackageLocalizedText.odataType = n.getStringValue(); },
        "text": n => { accessPackageLocalizedText.text = n.getStringValue(); },
    }
}
