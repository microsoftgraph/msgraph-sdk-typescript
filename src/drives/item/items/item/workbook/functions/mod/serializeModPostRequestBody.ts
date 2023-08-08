import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ModPostRequestBody} from './modPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeModPostRequestBody(writer: SerializationWriter, modPostRequestBody: ModPostRequestBody | undefined = {} as ModPostRequestBody) : void {
        writer.writeObjectValue<Json>("divisor", modPostRequestBody.divisor, serializeJson);
        writer.writeObjectValue<Json>("number", modPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(modPostRequestBody.additionalData);
}
