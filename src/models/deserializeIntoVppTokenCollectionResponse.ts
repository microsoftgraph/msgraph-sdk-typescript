import {createVppTokenFromDiscriminatorValue} from './createVppTokenFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeVppToken} from './serializeVppToken';
import {VppToken} from './vppToken';
import {VppTokenCollectionResponse} from './vppTokenCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppTokenCollectionResponse(vppTokenCollectionResponse: VppTokenCollectionResponse | undefined = {} as VppTokenCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(vppTokenCollectionResponse),
        "value": n => { vppTokenCollectionResponse.value = n.getCollectionOfObjectValues<VppToken>(createVppTokenFromDiscriminatorValue); },
    }
}
