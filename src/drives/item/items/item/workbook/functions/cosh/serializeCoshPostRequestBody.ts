import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoshPostRequestBody} from './coshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoshPostRequestBody(writer: SerializationWriter, coshPostRequestBody: CoshPostRequestBody | undefined = {} as CoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", coshPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(coshPostRequestBody.additionalData);
}
