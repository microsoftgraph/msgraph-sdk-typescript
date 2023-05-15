import {ContactRelationship} from './contactRelationship';
import {RelatedContact} from './relatedContact';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelatedContact(writer: SerializationWriter, relatedContact: RelatedContact | undefined = {} as RelatedContact) : void {
        writer.writeBooleanValue("accessConsent", relatedContact.accessConsent);
        writer.writeStringValue("displayName", relatedContact.displayName);
        writer.writeStringValue("emailAddress", relatedContact.emailAddress);
        writer.writeStringValue("mobilePhone", relatedContact.mobilePhone);
        writer.writeStringValue("@odata.type", relatedContact.odataType);
        writer.writeEnumValue<ContactRelationship>("relationship", relatedContact.relationship);
        writer.writeAdditionalData(relatedContact.additionalData);
}
