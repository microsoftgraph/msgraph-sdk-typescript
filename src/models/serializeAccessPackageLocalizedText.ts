import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageLocalizedText(writer: SerializationWriter, accessPackageLocalizedText: AccessPackageLocalizedText | undefined = {} as AccessPackageLocalizedText) : void {
        writer.writeStringValue("languageCode", accessPackageLocalizedText.languageCode);
        writer.writeStringValue("@odata.type", accessPackageLocalizedText.odataType);
        writer.writeStringValue("text", accessPackageLocalizedText.text);
        writer.writeAdditionalData(accessPackageLocalizedText.additionalData);
}
