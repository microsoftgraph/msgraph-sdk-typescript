import { createVppTokenFromDiscriminatorValue } from './createVppTokenFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeVppToken } from './serializeVppToken';
import { type VppToken } from './vppToken';
import { type VppTokenCollectionResponse } from './vppTokenCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoVppTokenCollectionResponse(vppTokenCollectionResponse: VppTokenCollectionResponse | undefined = {} as VppTokenCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(vppTokenCollectionResponse),
        "value": n => { vppTokenCollectionResponse.value = n.getCollectionOfObjectValues<VppToken>(createVppTokenFromDiscriminatorValue); },
    }
}
