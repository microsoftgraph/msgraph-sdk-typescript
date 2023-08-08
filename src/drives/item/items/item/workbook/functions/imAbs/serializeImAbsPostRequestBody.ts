import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImAbsPostRequestBody} from './imAbsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImAbsPostRequestBody(writer: SerializationWriter, imAbsPostRequestBody: ImAbsPostRequestBody | undefined = {} as ImAbsPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imAbsPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imAbsPostRequestBody.additionalData);
}
