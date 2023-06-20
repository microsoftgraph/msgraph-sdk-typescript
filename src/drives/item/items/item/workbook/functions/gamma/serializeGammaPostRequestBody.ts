import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GammaPostRequestBody} from './gammaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGammaPostRequestBody(gammaPostRequestBody: GammaPostRequestBody | undefined = {} as GammaPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", gammaPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gammaPostRequestBody.additionalData);
}
