import { type ActivitySettings } from './activitySettings';
import { createUrlToItemResolverBaseFromDiscriminatorValue } from './createUrlToItemResolverBaseFromDiscriminatorValue';
import { serializeUrlToItemResolverBase } from './serializeUrlToItemResolverBase';
import { type UrlToItemResolverBase } from './urlToItemResolverBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActivitySettings(activitySettings: ActivitySettings | undefined = {} as ActivitySettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { activitySettings.odataType = n.getStringValue(); },
        "urlToItemResolvers": n => { activitySettings.urlToItemResolvers = n.getCollectionOfObjectValues<UrlToItemResolverBase>(createUrlToItemResolverBaseFromDiscriminatorValue); },
    }
}
