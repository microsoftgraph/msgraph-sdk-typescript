import { type UrlMatchInfo } from './urlMatchInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlMatchInfo(urlMatchInfo: UrlMatchInfo | undefined = {} as UrlMatchInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "baseUrls": n => { urlMatchInfo.baseUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { urlMatchInfo.odataType = n.getStringValue(); },
        "urlPattern": n => { urlMatchInfo.urlPattern = n.getStringValue(); },
    }
}
