import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type GetMemberGroupsResponse } from './getMemberGroupsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberGroupsResponse(getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {} as GetMemberGroupsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberGroupsResponse),
        "value": n => { getMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
