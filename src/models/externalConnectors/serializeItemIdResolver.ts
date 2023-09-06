import { type ItemIdResolver } from './itemIdResolver';
import { serializeUrlMatchInfo } from './serializeUrlMatchInfo';
import { serializeUrlToItemResolverBase } from './serializeUrlToItemResolverBase';
import { type UrlMatchInfo } from './urlMatchInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemIdResolver(writer: SerializationWriter, itemIdResolver: ItemIdResolver | undefined = {} as ItemIdResolver) : void {
        serializeUrlToItemResolverBase(writer, itemIdResolver)
        writer.writeStringValue("itemId", itemIdResolver.itemId);
        writer.writeObjectValue<UrlMatchInfo>("urlMatchInfo", itemIdResolver.urlMatchInfo, serializeUrlMatchInfo);
}
