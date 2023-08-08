import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImCschPostRequestBody} from './imCschPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCschPostRequestBody(writer: SerializationWriter, imCschPostRequestBody: ImCschPostRequestBody | undefined = {} as ImCschPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCschPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCschPostRequestBody.additionalData);
}
