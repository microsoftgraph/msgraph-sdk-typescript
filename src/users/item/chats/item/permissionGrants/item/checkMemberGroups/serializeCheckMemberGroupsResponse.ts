import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type CheckMemberGroupsResponse } from './checkMemberGroupsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsResponse(writer: SerializationWriter, checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {} as CheckMemberGroupsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkMemberGroupsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", checkMemberGroupsResponse.value);
}
