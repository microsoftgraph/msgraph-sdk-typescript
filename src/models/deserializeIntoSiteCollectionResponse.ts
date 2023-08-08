import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSite} from './serializeSite';
import type {Site} from './site';
import type {SiteCollectionResponse} from './siteCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteCollectionResponse(siteCollectionResponse: SiteCollectionResponse | undefined = {} as SiteCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(siteCollectionResponse),
        "value": n => { siteCollectionResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
