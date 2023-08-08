import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImTanPostRequestBody} from './imTanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImTanPostRequestBody(writer: SerializationWriter, imTanPostRequestBody: ImTanPostRequestBody | undefined = {} as ImTanPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imTanPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imTanPostRequestBody.additionalData);
}
