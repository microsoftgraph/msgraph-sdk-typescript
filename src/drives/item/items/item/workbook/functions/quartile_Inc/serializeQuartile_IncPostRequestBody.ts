import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Quartile_IncPostRequestBody} from './quartile_IncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuartile_IncPostRequestBody(writer: SerializationWriter, quartile_IncPostRequestBody: Quartile_IncPostRequestBody | undefined = {} as Quartile_IncPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", quartile_IncPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("quart", quartile_IncPostRequestBody.quart, serializeJson);
        writer.writeAdditionalData(quartile_IncPostRequestBody.additionalData);
}
