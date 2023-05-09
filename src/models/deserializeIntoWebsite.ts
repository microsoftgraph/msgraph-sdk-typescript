import {Website} from './website';
import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebsite(website: Website | undefined = {} as Website) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { website.address = n.getStringValue(); },
        "displayName": n => { website.displayName = n.getStringValue(); },
        "@odata.type": n => { website.odataType = n.getStringValue(); },
        "type": n => { website.type = n.getEnumValue<WebsiteType>(WebsiteType); },
    }
}
