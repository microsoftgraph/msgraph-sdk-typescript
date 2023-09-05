import { createUrlMatchInfoFromDiscriminatorValue } from './createUrlMatchInfoFromDiscriminatorValue';
import { deserializeIntoUrlToItemResolverBase } from './deserializeIntoUrlToItemResolverBase';
import { type ItemIdResolver } from './itemIdResolver';
import { serializeUrlMatchInfo } from './serializeUrlMatchInfo';
import { type UrlMatchInfo } from './urlMatchInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemIdResolver(itemIdResolver: ItemIdResolver | undefined = {} as ItemIdResolver) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUrlToItemResolverBase(itemIdResolver),
        "itemId": n => { itemIdResolver.itemId = n.getStringValue(); },
        "urlMatchInfo": n => { itemIdResolver.urlMatchInfo = n.getObjectValue<UrlMatchInfo>(createUrlMatchInfoFromDiscriminatorValue); },
    }
}
