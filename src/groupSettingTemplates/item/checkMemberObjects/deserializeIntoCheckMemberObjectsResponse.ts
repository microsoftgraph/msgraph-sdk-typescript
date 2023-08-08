import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {CheckMemberObjectsResponse} from './checkMemberObjectsResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberObjectsResponse(checkMemberObjectsResponse: CheckMemberObjectsResponse | undefined = {} as CheckMemberObjectsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkMemberObjectsResponse),
        "value": n => { checkMemberObjectsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
