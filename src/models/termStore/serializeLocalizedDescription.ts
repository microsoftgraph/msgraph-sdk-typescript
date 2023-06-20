import {LocalizedDescription} from './localizedDescription';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedDescription(localizedDescription: LocalizedDescription | undefined = {} as LocalizedDescription, writer: SerializationWriter) : void {
        writer.writeStringValue("description", localizedDescription.description);
        writer.writeStringValue("languageTag", localizedDescription.languageTag);
        writer.writeStringValue("@odata.type", localizedDescription.odataType);
        writer.writeAdditionalData(localizedDescription.additionalData);
}
