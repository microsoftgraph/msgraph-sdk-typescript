import {UrlMatchInfo} from './urlMatchInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlMatchInfo(writer: SerializationWriter, urlMatchInfo: UrlMatchInfo | undefined = {} as UrlMatchInfo) : void {
        writer.writeCollectionOfPrimitiveValues<string>("baseUrls", urlMatchInfo.baseUrls);
        writer.writeStringValue("@odata.type", urlMatchInfo.odataType);
        writer.writeStringValue("urlPattern", urlMatchInfo.urlPattern);
        writer.writeAdditionalData(urlMatchInfo.additionalData);
}
