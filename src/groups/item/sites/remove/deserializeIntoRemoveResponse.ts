import {createSiteFromDiscriminatorValue} from '../../../../models/createSiteFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../../../models/serializeSite';
import {Site} from '../../../../models/site';
import {RemoveResponse} from './removeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveResponse(removeResponse: RemoveResponse | undefined = {} as RemoveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(removeResponse),
        "value": n => { removeResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
