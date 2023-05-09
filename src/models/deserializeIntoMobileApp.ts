import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createMobileAppAssignmentFromDiscriminatorValue} from './createMobileAppAssignmentFromDiscriminatorValue';
import {createMobileAppCategoryFromDiscriminatorValue} from './createMobileAppCategoryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MimeContent} from './mimeContent';
import {MobileApp} from './mobileApp';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppCategory} from './mobileAppCategory';
import {MobileAppPublishingState} from './mobileAppPublishingState';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeMobileAppAssignment} from './serializeMobileAppAssignment';
import {serializeMobileAppCategory} from './serializeMobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileApp(mobileApp: MobileApp | undefined = {} as MobileApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileApp),
        "assignments": n => { mobileApp.assignments = n.getCollectionOfObjectValues<MobileAppAssignment>(createMobileAppAssignmentFromDiscriminatorValue); },
        "categories": n => { mobileApp.categories = n.getCollectionOfObjectValues<MobileAppCategory>(createMobileAppCategoryFromDiscriminatorValue); },
        "createdDateTime": n => { mobileApp.createdDateTime = n.getDateValue(); },
        "description": n => { mobileApp.description = n.getStringValue(); },
        "developer": n => { mobileApp.developer = n.getStringValue(); },
        "displayName": n => { mobileApp.displayName = n.getStringValue(); },
        "informationUrl": n => { mobileApp.informationUrl = n.getStringValue(); },
        "isFeatured": n => { mobileApp.isFeatured = n.getBooleanValue(); },
        "largeIcon": n => { mobileApp.largeIcon = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { mobileApp.lastModifiedDateTime = n.getDateValue(); },
        "notes": n => { mobileApp.notes = n.getStringValue(); },
        "owner": n => { mobileApp.owner = n.getStringValue(); },
        "privacyInformationUrl": n => { mobileApp.privacyInformationUrl = n.getStringValue(); },
        "publisher": n => { mobileApp.publisher = n.getStringValue(); },
        "publishingState": n => { mobileApp.publishingState = n.getEnumValue<MobileAppPublishingState>(MobileAppPublishingState); },
    }
}
