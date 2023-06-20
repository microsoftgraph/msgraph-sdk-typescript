import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSqrtPostRequestBody} from './imSqrtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSqrtPostRequestBody(imSqrtPostRequestBody: ImSqrtPostRequestBody | undefined = {} as ImSqrtPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imSqrtPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSqrtPostRequestBody.additionalData);
}
