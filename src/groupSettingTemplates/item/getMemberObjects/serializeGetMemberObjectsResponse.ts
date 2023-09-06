import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetMemberObjectsResponse } from './getMemberObjectsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsResponse(writer: SerializationWriter, getMemberObjectsResponse: GetMemberObjectsResponse | undefined = {} as GetMemberObjectsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMemberObjectsResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getMemberObjectsResponse.value);
}
