import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GammaPostRequestBody} from './gammaPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaPostRequestBody(writer: SerializationWriter, gammaPostRequestBody: GammaPostRequestBody | undefined = {} as GammaPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gammaPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaPostRequestBody.additionalData);
}
