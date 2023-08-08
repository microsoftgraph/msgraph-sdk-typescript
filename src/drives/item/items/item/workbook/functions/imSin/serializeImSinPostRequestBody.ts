import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSinPostRequestBody} from './imSinPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSinPostRequestBody(writer: SerializationWriter, imSinPostRequestBody: ImSinPostRequestBody | undefined = {} as ImSinPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSinPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSinPostRequestBody.additionalData);
}
