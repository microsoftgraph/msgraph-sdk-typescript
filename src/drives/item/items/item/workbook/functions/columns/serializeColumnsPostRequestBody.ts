import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ColumnsPostRequestBody} from './columnsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnsPostRequestBody(writer: SerializationWriter, columnsPostRequestBody: ColumnsPostRequestBody | undefined = {} as ColumnsPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", columnsPostRequestBody.array, serializeJson);
        writer.writeAdditionalData(columnsPostRequestBody.additionalData);
}
