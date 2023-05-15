import {LocalizedLabel} from './localizedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedLabel(writer: SerializationWriter, localizedLabel: LocalizedLabel | undefined = {} as LocalizedLabel) : void {
        writer.writeBooleanValue("isDefault", localizedLabel.isDefault);
        writer.writeStringValue("languageTag", localizedLabel.languageTag);
        writer.writeStringValue("name", localizedLabel.name);
        writer.writeStringValue("@odata.type", localizedLabel.odataType);
        writer.writeAdditionalData(localizedLabel.additionalData);
}
