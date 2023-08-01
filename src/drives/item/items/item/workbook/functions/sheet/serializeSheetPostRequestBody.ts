import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SheetPostRequestBody} from './sheetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSheetPostRequestBody(writer: SerializationWriter, sheetPostRequestBody: SheetPostRequestBody | undefined = {} as SheetPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", sheetPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(sheetPostRequestBody.additionalData);
}
