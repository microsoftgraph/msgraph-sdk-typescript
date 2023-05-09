import {ActivitySettings} from './activitySettings';
import {serializeUrlToItemResolverBase} from './serializeUrlToItemResolverBase';
import {UrlToItemResolverBase} from './urlToItemResolverBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivitySettings(writer: SerializationWriter, activitySettings: ActivitySettings | undefined = {} as ActivitySettings) : void {
        writer.writeStringValue("@odata.type", activitySettings.odataType);
        writer.writeCollectionOfObjectValues<UrlToItemResolverBase>("urlToItemResolvers", activitySettings.urlToItemResolvers, serializeUrlToItemResolverBase);
        writer.writeAdditionalData(activitySettings.additionalData);
}
