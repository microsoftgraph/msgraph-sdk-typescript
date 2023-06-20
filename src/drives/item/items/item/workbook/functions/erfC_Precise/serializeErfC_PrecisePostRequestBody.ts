import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ErfC_PrecisePostRequestBody} from './erfC_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErfC_PrecisePostRequestBody(erfC_PrecisePostRequestBody: ErfC_PrecisePostRequestBody | undefined = {} as ErfC_PrecisePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", erfC_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(erfC_PrecisePostRequestBody.additionalData);
}
