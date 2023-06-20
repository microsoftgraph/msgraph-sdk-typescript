import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GammaLnPostRequestBody} from './gammaLnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaLnPostRequestBody(gammaLnPostRequestBody: GammaLnPostRequestBody | undefined = {} as GammaLnPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", gammaLnPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaLnPostRequestBody.additionalData);
}
