import {UrlToItemResolverBase} from './urlToItemResolverBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlToItemResolverBase(urlToItemResolverBase: UrlToItemResolverBase | undefined = {} as UrlToItemResolverBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { urlToItemResolverBase.odataType = n.getStringValue(); },
        "priority": n => { urlToItemResolverBase.priority = n.getNumberValue(); },
    }
}
