import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {CheckMemberObjectsResponse} from './checkMemberObjectsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberObjectsResponse(writer: SerializationWriter, checkMemberObjectsResponse: CheckMemberObjectsResponse | undefined = {} as CheckMemberObjectsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkMemberObjectsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", checkMemberObjectsResponse.value);
}
