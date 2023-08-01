import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CscPostRequestBody} from './cscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCscPostRequestBody(writer: SerializationWriter, cscPostRequestBody: CscPostRequestBody | undefined = {} as CscPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cscPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cscPostRequestBody.additionalData);
}
