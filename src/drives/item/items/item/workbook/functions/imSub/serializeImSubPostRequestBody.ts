import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSubPostRequestBody} from './imSubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSubPostRequestBody(writer: SerializationWriter, imSubPostRequestBody: ImSubPostRequestBody | undefined = {} as ImSubPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber1", imSubPostRequestBody.inumber1, serializeJson);
        writer.writeObjectValue<Json>("inumber2", imSubPostRequestBody.inumber2, serializeJson);
        writer.writeAdditionalData(imSubPostRequestBody.additionalData);
}
