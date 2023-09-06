import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSite } from './serializeSite';
import { type Site } from './site';
import { type SiteCollectionResponse } from './siteCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSiteCollectionResponse(writer: SerializationWriter, siteCollectionResponse: SiteCollectionResponse | undefined = {} as SiteCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteCollectionResponse)
        writer.writeCollectionOfObjectValues<Site>("value", siteCollectionResponse.value, serializeSite);
}
