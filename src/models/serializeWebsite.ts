import {Website} from './website';
import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebsite(writer: SerializationWriter, website: Website | undefined = {} as Website) : void {
        writer.writeStringValue("address", website.address);
        writer.writeStringValue("displayName", website.displayName);
        writer.writeStringValue("@odata.type", website.odataType);
        writer.writeEnumValue<WebsiteType>("type", website.type);
        writer.writeAdditionalData(website.additionalData);
}
