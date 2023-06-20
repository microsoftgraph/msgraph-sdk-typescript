import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ModPostRequestBody} from './modPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeModPostRequestBody(modPostRequestBody: ModPostRequestBody | undefined = {} as ModPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("divisor", modPostRequestBody.divisor, serializeJson);
        writer.writeObjectValue<Json>("number", modPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(modPostRequestBody.additionalData);
}
