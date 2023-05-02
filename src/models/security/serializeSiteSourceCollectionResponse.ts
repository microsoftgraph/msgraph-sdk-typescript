import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeSiteSource} from './serializeSiteSource';
import {SiteSource} from './siteSource';
import {SiteSourceCollectionResponse} from './siteSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSourceCollectionResponse(writer: SerializationWriter, siteSourceCollectionResponse: SiteSourceCollectionResponse | undefined = {} as SiteSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<SiteSource>("value", siteSourceCollectionResponse.value, serializeSiteSource);
}
