import {ContactRelationship} from './contactRelationship';
import {RelatedContact} from './relatedContact';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelatedContact(relatedContact: RelatedContact | undefined = {} as RelatedContact) : Record<string, (node: ParseNode) => void> {
    return {
        "accessConsent": n => { relatedContact.accessConsent = n.getBooleanValue(); },
        "displayName": n => { relatedContact.displayName = n.getStringValue(); },
        "emailAddress": n => { relatedContact.emailAddress = n.getStringValue(); },
        "mobilePhone": n => { relatedContact.mobilePhone = n.getStringValue(); },
        "@odata.type": n => { relatedContact.odataType = n.getStringValue(); },
        "relationship": n => { relatedContact.relationship = n.getEnumValue<ContactRelationship>(ContactRelationship); },
    }
}
