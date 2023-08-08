import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RowsPostRequestBody} from './rowsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRowsPostRequestBody(writer: SerializationWriter, rowsPostRequestBody: RowsPostRequestBody | undefined = {} as RowsPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", rowsPostRequestBody.array, serializeJson);
        writer.writeAdditionalData(rowsPostRequestBody.additionalData);
}
