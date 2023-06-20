import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetMemberGroupsResponse} from './getMemberGroupsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsResponse(getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {} as GetMemberGroupsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMemberGroupsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getMemberGroupsResponse.value);
}
