import { type UrlToItemResolverBase } from './urlToItemResolverBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlToItemResolverBase(urlToItemResolverBase: UrlToItemResolverBase | undefined = {} as UrlToItemResolverBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { urlToItemResolverBase.odataType = n.getStringValue(); },
        "priority": n => { urlToItemResolverBase.priority = n.getNumberValue(); },
    }
}
