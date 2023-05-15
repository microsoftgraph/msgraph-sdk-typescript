import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCscPostRequestBody} from './imCscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImCscPostRequestBody(writer: SerializationWriter, imCscPostRequestBody: ImCscPostRequestBody | undefined = {} as ImCscPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imCscPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imCscPostRequestBody.additionalData);
}
