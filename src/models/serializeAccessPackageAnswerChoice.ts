import {AccessPackageAnswerChoice} from './accessPackageAnswerChoice';
import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {serializeAccessPackageLocalizedText} from './serializeAccessPackageLocalizedText';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAnswerChoice(writer: SerializationWriter, accessPackageAnswerChoice: AccessPackageAnswerChoice | undefined = {} as AccessPackageAnswerChoice) : void {
        writer.writeStringValue("actualValue", accessPackageAnswerChoice.actualValue);
        writer.writeCollectionOfObjectValues<AccessPackageLocalizedText>("localizations", accessPackageAnswerChoice.localizations, serializeAccessPackageLocalizedText);
        writer.writeStringValue("@odata.type", accessPackageAnswerChoice.odataType);
        writer.writeStringValue("text", accessPackageAnswerChoice.text);
        writer.writeAdditionalData(accessPackageAnswerChoice.additionalData);
}
