import {LocalizedLabel} from './localizedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedLabel(localizedLabel: LocalizedLabel | undefined = {} as LocalizedLabel, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isDefault", localizedLabel.isDefault);
        writer.writeStringValue("languageTag", localizedLabel.languageTag);
        writer.writeStringValue("name", localizedLabel.name);
        writer.writeStringValue("@odata.type", localizedLabel.odataType);
        writer.writeAdditionalData(localizedLabel.additionalData);
}
