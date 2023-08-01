import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Quartile_ExcPostRequestBody} from './quartile_ExcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuartile_ExcPostRequestBody(writer: SerializationWriter, quartile_ExcPostRequestBody: Quartile_ExcPostRequestBody | undefined = {} as Quartile_ExcPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", quartile_ExcPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("quart", quartile_ExcPostRequestBody.quart, serializeJson);
        writer.writeAdditionalData(quartile_ExcPostRequestBody.additionalData);
}
