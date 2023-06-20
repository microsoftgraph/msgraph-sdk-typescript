import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetByIdsPostRequestBody(getByIdsPostRequestBody: GetByIdsPostRequestBody | undefined = {} as GetByIdsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", getByIdsPostRequestBody.ids);
        writer.writeCollectionOfPrimitiveValues<string>("types", getByIdsPostRequestBody.types);
        writer.writeAdditionalData(getByIdsPostRequestBody.additionalData);
}
