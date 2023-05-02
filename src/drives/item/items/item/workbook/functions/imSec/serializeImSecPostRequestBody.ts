import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSecPostRequestBody} from './imSecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSecPostRequestBody(writer: SerializationWriter, imSecPostRequestBody: ImSecPostRequestBody | undefined = {} as ImSecPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSecPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSecPostRequestBody.additionalData);
}
