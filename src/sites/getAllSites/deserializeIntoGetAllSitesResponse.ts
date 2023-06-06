import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {GetAllSitesResponse} from './getAllSitesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAllSitesResponse(getAllSitesResponse: GetAllSitesResponse | undefined = {} as GetAllSitesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAllSitesResponse),
        "value": n => { getAllSitesResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
