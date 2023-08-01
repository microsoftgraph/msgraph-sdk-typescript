import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GammaLnPostRequestBody} from './gammaLnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaLnPostRequestBody(writer: SerializationWriter, gammaLnPostRequestBody: GammaLnPostRequestBody | undefined = {} as GammaLnPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gammaLnPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaLnPostRequestBody.additionalData);
}
