import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createRgbColorFromDiscriminatorValue} from './createRgbColorFromDiscriminatorValue';
import {IntuneBrand} from './intuneBrand';
import {MimeContent} from './mimeContent';
import {RgbColor} from './rgbColor';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeRgbColor} from './serializeRgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntuneBrand(intuneBrand: IntuneBrand | undefined = {} as IntuneBrand) : Record<string, (node: ParseNode) => void> {
    return {
        "contactITEmailAddress": n => { intuneBrand.contactITEmailAddress = n.getStringValue(); },
        "contactITName": n => { intuneBrand.contactITName = n.getStringValue(); },
        "contactITNotes": n => { intuneBrand.contactITNotes = n.getStringValue(); },
        "contactITPhoneNumber": n => { intuneBrand.contactITPhoneNumber = n.getStringValue(); },
        "darkBackgroundLogo": n => { intuneBrand.darkBackgroundLogo = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
        "displayName": n => { intuneBrand.displayName = n.getStringValue(); },
        "lightBackgroundLogo": n => { intuneBrand.lightBackgroundLogo = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
        "@odata.type": n => { intuneBrand.odataType = n.getStringValue(); },
        "onlineSupportSiteName": n => { intuneBrand.onlineSupportSiteName = n.getStringValue(); },
        "onlineSupportSiteUrl": n => { intuneBrand.onlineSupportSiteUrl = n.getStringValue(); },
        "privacyUrl": n => { intuneBrand.privacyUrl = n.getStringValue(); },
        "showDisplayNameNextToLogo": n => { intuneBrand.showDisplayNameNextToLogo = n.getBooleanValue(); },
        "showLogo": n => { intuneBrand.showLogo = n.getBooleanValue(); },
        "showNameNextToLogo": n => { intuneBrand.showNameNextToLogo = n.getBooleanValue(); },
        "themeColor": n => { intuneBrand.themeColor = n.getObjectValue<RgbColor>(createRgbColorFromDiscriminatorValue); },
    }
}
