import { type LocalizedDescription } from './localizedDescription';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLocalizedDescription(writer: SerializationWriter, localizedDescription: LocalizedDescription | undefined = {} as LocalizedDescription) : void {
        writer.writeStringValue("description", localizedDescription.description);
        writer.writeStringValue("languageTag", localizedDescription.languageTag);
        writer.writeStringValue("@odata.type", localizedDescription.odataType);
        writer.writeAdditionalData(localizedDescription.additionalData);
}
