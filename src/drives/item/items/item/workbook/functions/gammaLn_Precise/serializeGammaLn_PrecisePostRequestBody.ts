import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GammaLn_PrecisePostRequestBody} from './gammaLn_PrecisePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaLn_PrecisePostRequestBody(writer: SerializationWriter, gammaLn_PrecisePostRequestBody: GammaLn_PrecisePostRequestBody | undefined = {} as GammaLn_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gammaLn_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaLn_PrecisePostRequestBody.additionalData);
}
