import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Erf_PrecisePostRequestBody} from './erf_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErf_PrecisePostRequestBody(erf_PrecisePostRequestBody: Erf_PrecisePostRequestBody | undefined = {} as Erf_PrecisePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", erf_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(erf_PrecisePostRequestBody.additionalData);
}
