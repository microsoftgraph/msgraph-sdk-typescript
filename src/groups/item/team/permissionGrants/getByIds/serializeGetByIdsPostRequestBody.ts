import { type GetByIdsPostRequestBody } from './getByIdsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetByIdsPostRequestBody(writer: SerializationWriter, getByIdsPostRequestBody: GetByIdsPostRequestBody | undefined = {} as GetByIdsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", getByIdsPostRequestBody.ids);
        writer.writeCollectionOfPrimitiveValues<string>("types", getByIdsPostRequestBody.types);
        writer.writeAdditionalData(getByIdsPostRequestBody.additionalData);
}
