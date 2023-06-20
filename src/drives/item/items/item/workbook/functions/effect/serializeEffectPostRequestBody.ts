import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EffectPostRequestBody} from './effectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEffectPostRequestBody(effectPostRequestBody: EffectPostRequestBody | undefined = {} as EffectPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("nominalRate", effectPostRequestBody.nominalRate, serializeJson);
        writer.writeObjectValue<Json>("npery", effectPostRequestBody.npery, serializeJson);
        writer.writeAdditionalData(effectPostRequestBody.additionalData);
}
