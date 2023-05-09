import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetMemberObjectsResponse} from './getMemberObjectsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberObjectsResponse(getMemberObjectsResponse: GetMemberObjectsResponse | undefined = {} as GetMemberObjectsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberObjectsResponse),
        "value": n => { getMemberObjectsResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
