import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Dec2OctPostRequestBody} from './dec2OctPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDec2OctPostRequestBody(writer: SerializationWriter, dec2OctPostRequestBody: Dec2OctPostRequestBody | undefined = {} as Dec2OctPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", dec2OctPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", dec2OctPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(dec2OctPostRequestBody.additionalData);
}
