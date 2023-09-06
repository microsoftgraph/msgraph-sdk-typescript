import { type Root } from './root';
import { serializeRoot } from './serializeRoot';
import { type SiteCollection } from './siteCollection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSiteCollection(writer: SerializationWriter, siteCollection: SiteCollection | undefined = {} as SiteCollection) : void {
        writer.writeStringValue("dataLocationCode", siteCollection.dataLocationCode);
        writer.writeStringValue("hostname", siteCollection.hostname);
        writer.writeStringValue("@odata.type", siteCollection.odataType);
        writer.writeObjectValue<Root>("root", siteCollection.root, serializeRoot);
        writer.writeAdditionalData(siteCollection.additionalData);
}
