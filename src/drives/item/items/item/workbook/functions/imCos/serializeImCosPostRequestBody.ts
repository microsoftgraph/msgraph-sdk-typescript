import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImCosPostRequestBody} from './imCosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCosPostRequestBody(writer: SerializationWriter, imCosPostRequestBody: ImCosPostRequestBody | undefined = {} as ImCosPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCosPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCosPostRequestBody.additionalData);
}
