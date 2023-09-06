import { serializeSite } from '../serializeSite';
import { type Site } from '../site';
import { serializeDataSource } from './serializeDataSource';
import { type SiteSource } from './siteSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSiteSource(writer: SerializationWriter, siteSource: SiteSource | undefined = {} as SiteSource) : void {
        serializeDataSource(writer, siteSource)
        writer.writeObjectValue<Site>("site", siteSource.site, serializeSite);
}
