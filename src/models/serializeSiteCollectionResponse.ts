import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from './serializeSite';
import {Site} from './site';
import {SiteCollectionResponse} from './siteCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteCollectionResponse(writer: SerializationWriter, siteCollectionResponse: SiteCollectionResponse | undefined = {} as SiteCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, siteCollectionResponse)
        writer.writeCollectionOfObjectValues<Site>("value", siteCollectionResponse.value, serializeSite);
}
