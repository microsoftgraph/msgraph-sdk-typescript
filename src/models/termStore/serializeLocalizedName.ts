import { type LocalizedName } from './localizedName';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLocalizedName(writer: SerializationWriter, localizedName: LocalizedName | undefined = {} as LocalizedName) : void {
        writer.writeStringValue("languageTag", localizedName.languageTag);
        writer.writeStringValue("name", localizedName.name);
        writer.writeStringValue("@odata.type", localizedName.odataType);
        writer.writeAdditionalData(localizedName.additionalData);
}
