import {UrlToItemResolverBase} from './urlToItemResolverBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlToItemResolverBase(writer: SerializationWriter, urlToItemResolverBase: UrlToItemResolverBase | undefined = {} as UrlToItemResolverBase) : void {
        writer.writeStringValue("@odata.type", urlToItemResolverBase.odataType);
        writer.writeNumberValue("priority", urlToItemResolverBase.priority);
        writer.writeAdditionalData(urlToItemResolverBase.additionalData);
}
