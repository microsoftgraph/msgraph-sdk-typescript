import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SinPostRequestBody} from './sinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSinPostRequestBody(writer: SerializationWriter, sinPostRequestBody: SinPostRequestBody | undefined = {} as SinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sinPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sinPostRequestBody.additionalData);
}
