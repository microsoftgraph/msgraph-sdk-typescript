import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type CheckMemberGroupsResponse } from './checkMemberGroupsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberGroupsResponse(checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {} as CheckMemberGroupsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkMemberGroupsResponse),
        "value": n => { checkMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
