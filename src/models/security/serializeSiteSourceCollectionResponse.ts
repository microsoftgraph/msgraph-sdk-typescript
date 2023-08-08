import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeSiteSource} from './serializeSiteSource';
import type {SiteSource} from './siteSource';
import type {SiteSourceCollectionResponse} from './siteSourceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSourceCollectionResponse(writer: SerializationWriter, siteSourceCollectionResponse: SiteSourceCollectionResponse | undefined = {} as SiteSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<SiteSource>("value", siteSourceCollectionResponse.value, serializeSiteSource);
}
