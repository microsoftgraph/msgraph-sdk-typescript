import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CscPostRequestBody} from './cscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCscPostRequestBody(cscPostRequestBody: CscPostRequestBody | undefined = {} as CscPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", cscPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cscPostRequestBody.additionalData);
}
