import { type DisplayNameLocalization } from './displayNameLocalization';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDisplayNameLocalization(writer: SerializationWriter, displayNameLocalization: DisplayNameLocalization | undefined = {} as DisplayNameLocalization) : void {
        writer.writeStringValue("displayName", displayNameLocalization.displayName);
        writer.writeStringValue("languageTag", displayNameLocalization.languageTag);
        writer.writeStringValue("@odata.type", displayNameLocalization.odataType);
        writer.writeAdditionalData(displayNameLocalization.additionalData);
}
