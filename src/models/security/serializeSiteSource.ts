import {serializeSite} from '../serializeSite';
import {Site} from '../site';
import {serializeDataSource} from './serializeDataSource';
import {SiteSource} from './siteSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSource(writer: SerializationWriter, siteSource: SiteSource | undefined = {} as SiteSource) : void {
        serializeDataSource(writer, siteSource)
        writer.writeObjectValue<Site>("site", siteSource.site, serializeSite);
}
