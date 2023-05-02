import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Ceiling_PrecisePostRequestBody} from './ceiling_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCeiling_PrecisePostRequestBody(writer: SerializationWriter, ceiling_PrecisePostRequestBody: Ceiling_PrecisePostRequestBody | undefined = {} as Ceiling_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("number", ceiling_PrecisePostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ceiling_PrecisePostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ceiling_PrecisePostRequestBody.additionalData);
}
