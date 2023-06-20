import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCosPostRequestBody} from './imCosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCosPostRequestBody(imCosPostRequestBody: ImCosPostRequestBody | undefined = {} as ImCosPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imCosPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCosPostRequestBody.additionalData);
}
