import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SechPostRequestBody} from './sechPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSechPostRequestBody(writer: SerializationWriter, sechPostRequestBody: SechPostRequestBody | undefined = {} as SechPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sechPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sechPostRequestBody.additionalData);
}
