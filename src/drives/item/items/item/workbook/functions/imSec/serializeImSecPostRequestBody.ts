import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSecPostRequestBody} from './imSecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSecPostRequestBody(imSecPostRequestBody: ImSecPostRequestBody | undefined = {} as ImSecPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imSecPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSecPostRequestBody.additionalData);
}
