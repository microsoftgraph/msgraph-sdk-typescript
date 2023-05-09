import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {CheckMemberGroupsResponse} from './checkMemberGroupsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsResponse(writer: SerializationWriter, checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {} as CheckMemberGroupsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkMemberGroupsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", checkMemberGroupsResponse.value);
}
