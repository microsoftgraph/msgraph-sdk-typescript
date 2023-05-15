import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetMemberGroupsResponse} from './getMemberGroupsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberGroupsResponse(getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {} as GetMemberGroupsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberGroupsResponse),
        "value": n => { getMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
