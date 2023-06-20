import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCscPostRequestBody} from './imCscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCscPostRequestBody(imCscPostRequestBody: ImCscPostRequestBody | undefined = {} as ImCscPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imCscPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCscPostRequestBody.additionalData);
}
