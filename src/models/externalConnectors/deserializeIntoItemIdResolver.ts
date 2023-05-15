import {createUrlMatchInfoFromDiscriminatorValue} from './createUrlMatchInfoFromDiscriminatorValue';
import {deserializeIntoUrlToItemResolverBase} from './deserializeIntoUrlToItemResolverBase';
import {ItemIdResolver} from './itemIdResolver';
import {serializeUrlMatchInfo} from './serializeUrlMatchInfo';
import {UrlMatchInfo} from './urlMatchInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemIdResolver(itemIdResolver: ItemIdResolver | undefined = {} as ItemIdResolver) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUrlToItemResolverBase(itemIdResolver),
        "itemId": n => { itemIdResolver.itemId = n.getStringValue(); },
        "urlMatchInfo": n => { itemIdResolver.urlMatchInfo = n.getObjectValue<UrlMatchInfo>(createUrlMatchInfoFromDiscriminatorValue); },
    }
}
