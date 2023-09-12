import { serializeBaseCollectionPaginationCountResponse } from '../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetMemberGroupsResponse } from './getMemberGroupsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsResponse(writer: SerializationWriter, getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {} as GetMemberGroupsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMemberGroupsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getMemberGroupsResponse.value);
}
