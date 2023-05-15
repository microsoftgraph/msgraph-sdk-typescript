import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createSiteSourceFromDiscriminatorValue} from './createSiteSourceFromDiscriminatorValue';
import {serializeSiteSource} from './serializeSiteSource';
import {SiteSource} from './siteSource';
import {SiteSourceCollectionResponse} from './siteSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteSourceCollectionResponse(siteSourceCollectionResponse: SiteSourceCollectionResponse | undefined = {} as SiteSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(siteSourceCollectionResponse),
        "value": n => { siteSourceCollectionResponse.value = n.getCollectionOfObjectValues<SiteSource>(createSiteSourceFromDiscriminatorValue); },
    }
}
