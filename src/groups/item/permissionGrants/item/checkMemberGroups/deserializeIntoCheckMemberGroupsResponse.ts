import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {CheckMemberGroupsResponse} from './checkMemberGroupsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberGroupsResponse(checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {} as CheckMemberGroupsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkMemberGroupsResponse),
        "value": n => { checkMemberGroupsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
