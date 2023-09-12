import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ColumnsPostRequestBody } from './columnsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeColumnsPostRequestBody(writer: SerializationWriter, columnsPostRequestBody: ColumnsPostRequestBody | undefined = {} as ColumnsPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", columnsPostRequestBody.array, serializeJson);
        writer.writeAdditionalData(columnsPostRequestBody.additionalData);
}
