import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SinPostRequestBody} from './sinPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSinPostRequestBody(writer: SerializationWriter, sinPostRequestBody: SinPostRequestBody | undefined = {} as SinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sinPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sinPostRequestBody.additionalData);
}
