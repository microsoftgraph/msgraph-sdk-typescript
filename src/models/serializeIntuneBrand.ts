import {IntuneBrand} from './intuneBrand';
import {MimeContent} from './mimeContent';
import {RgbColor} from './rgbColor';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeRgbColor} from './serializeRgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntuneBrand(writer: SerializationWriter, intuneBrand: IntuneBrand | undefined = {} as IntuneBrand) : void {
        writer.writeStringValue("contactITEmailAddress", intuneBrand.contactITEmailAddress);
        writer.writeStringValue("contactITName", intuneBrand.contactITName);
        writer.writeStringValue("contactITNotes", intuneBrand.contactITNotes);
        writer.writeStringValue("contactITPhoneNumber", intuneBrand.contactITPhoneNumber);
        writer.writeObjectValue<MimeContent>("darkBackgroundLogo", intuneBrand.darkBackgroundLogo, serializeMimeContent);
        writer.writeStringValue("displayName", intuneBrand.displayName);
        writer.writeObjectValue<MimeContent>("lightBackgroundLogo", intuneBrand.lightBackgroundLogo, serializeMimeContent);
        writer.writeStringValue("@odata.type", intuneBrand.odataType);
        writer.writeStringValue("onlineSupportSiteName", intuneBrand.onlineSupportSiteName);
        writer.writeStringValue("onlineSupportSiteUrl", intuneBrand.onlineSupportSiteUrl);
        writer.writeStringValue("privacyUrl", intuneBrand.privacyUrl);
        writer.writeBooleanValue("showDisplayNameNextToLogo", intuneBrand.showDisplayNameNextToLogo);
        writer.writeBooleanValue("showLogo", intuneBrand.showLogo);
        writer.writeBooleanValue("showNameNextToLogo", intuneBrand.showNameNextToLogo);
        writer.writeObjectValue<RgbColor>("themeColor", intuneBrand.themeColor, serializeRgbColor);
        writer.writeAdditionalData(intuneBrand.additionalData);
}
