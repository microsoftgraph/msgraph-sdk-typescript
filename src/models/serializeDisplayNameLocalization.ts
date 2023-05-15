import {DisplayNameLocalization} from './displayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisplayNameLocalization(writer: SerializationWriter, displayNameLocalization: DisplayNameLocalization | undefined = {} as DisplayNameLocalization) : void {
        writer.writeStringValue("displayName", displayNameLocalization.displayName);
        writer.writeStringValue("languageTag", displayNameLocalization.languageTag);
        writer.writeStringValue("@odata.type", displayNameLocalization.odataType);
        writer.writeAdditionalData(displayNameLocalization.additionalData);
}
