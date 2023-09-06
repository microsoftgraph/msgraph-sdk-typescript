import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type GetMemberObjectsResponse } from './getMemberObjectsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberObjectsResponse(getMemberObjectsResponse: GetMemberObjectsResponse | undefined = {} as GetMemberObjectsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberObjectsResponse),
        "value": n => { getMemberObjectsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
