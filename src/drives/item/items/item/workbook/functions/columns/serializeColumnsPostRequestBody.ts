import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ColumnsPostRequestBody} from './columnsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnsPostRequestBody(columnsPostRequestBody: ColumnsPostRequestBody | undefined = {} as ColumnsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("array", columnsPostRequestBody.array, serializeJson);
        writer.writeAdditionalData(columnsPostRequestBody.additionalData);
}
