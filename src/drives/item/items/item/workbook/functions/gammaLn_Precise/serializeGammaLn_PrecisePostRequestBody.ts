import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GammaLn_PrecisePostRequestBody} from './gammaLn_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaLn_PrecisePostRequestBody(writer: SerializationWriter, gammaLn_PrecisePostRequestBody: GammaLn_PrecisePostRequestBody | undefined = {} as GammaLn_PrecisePostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gammaLn_PrecisePostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaLn_PrecisePostRequestBody.additionalData);
}
