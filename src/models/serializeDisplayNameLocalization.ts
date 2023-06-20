import {DisplayNameLocalization} from './displayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisplayNameLocalization(displayNameLocalization: DisplayNameLocalization | undefined = {} as DisplayNameLocalization, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", displayNameLocalization.displayName);
        writer.writeStringValue("languageTag", displayNameLocalization.languageTag);
        writer.writeStringValue("@odata.type", displayNameLocalization.odataType);
        writer.writeAdditionalData(displayNameLocalization.additionalData);
}
