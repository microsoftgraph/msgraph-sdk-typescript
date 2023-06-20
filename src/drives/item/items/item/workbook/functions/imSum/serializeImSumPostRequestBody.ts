import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSumPostRequestBody} from './imSumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSumPostRequestBody(imSumPostRequestBody: ImSumPostRequestBody | undefined = {} as ImSumPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", imSumPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(imSumPostRequestBody.additionalData);
}
