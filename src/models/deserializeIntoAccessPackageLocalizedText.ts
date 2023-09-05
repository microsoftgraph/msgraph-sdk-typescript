import { type AccessPackageLocalizedText } from './accessPackageLocalizedText';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageLocalizedText(accessPackageLocalizedText: AccessPackageLocalizedText | undefined = {} as AccessPackageLocalizedText) : Record<string, (node: ParseNode) => void> {
    return {
        "languageCode": n => { accessPackageLocalizedText.languageCode = n.getStringValue(); },
        "@odata.type": n => { accessPackageLocalizedText.odataType = n.getStringValue(); },
        "text": n => { accessPackageLocalizedText.text = n.getStringValue(); },
    }
}
