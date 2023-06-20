import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {CheckMemberObjectsResponse} from './checkMemberObjectsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberObjectsResponse(checkMemberObjectsResponse: CheckMemberObjectsResponse | undefined = {} as CheckMemberObjectsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkMemberObjectsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", checkMemberObjectsResponse.value);
}
