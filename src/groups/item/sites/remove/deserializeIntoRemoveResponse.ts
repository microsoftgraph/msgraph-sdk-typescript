import { createSiteFromDiscriminatorValue } from '../../../../models/createSiteFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSite } from '../../../../models/serializeSite';
import { type Site } from '../../../../models/site';
import { type RemoveResponse } from './removeResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveResponse(removeResponse: RemoveResponse | undefined = {} as RemoveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(removeResponse),
        "value": n => { removeResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
