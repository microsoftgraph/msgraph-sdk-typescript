import {ItemIdResolver} from './itemIdResolver';
import {serializeUrlMatchInfo} from './serializeUrlMatchInfo';
import {serializeUrlToItemResolverBase} from './serializeUrlToItemResolverBase';
import {UrlMatchInfo} from './urlMatchInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemIdResolver(itemIdResolver: ItemIdResolver | undefined = {} as ItemIdResolver, writer: SerializationWriter) : void {
        serializeUrlToItemResolverBase(writer, itemIdResolver)
        writer.writeStringValue("itemId", itemIdResolver.itemId);
        writer.writeObjectValue<UrlMatchInfo>("urlMatchInfo", itemIdResolver.urlMatchInfo, serializeUrlMatchInfo);
}
