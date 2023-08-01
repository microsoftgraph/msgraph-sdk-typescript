import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSqrtPostRequestBody} from './imSqrtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSqrtPostRequestBody(writer: SerializationWriter, imSqrtPostRequestBody: ImSqrtPostRequestBody | undefined = {} as ImSqrtPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSqrtPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSqrtPostRequestBody.additionalData);
}
