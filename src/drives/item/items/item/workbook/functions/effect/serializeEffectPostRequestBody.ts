import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EffectPostRequestBody} from './effectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEffectPostRequestBody(writer: SerializationWriter, effectPostRequestBody: EffectPostRequestBody | undefined = {} as EffectPostRequestBody) : void {
        writer.writeObjectValue<Json>("nominalRate", effectPostRequestBody.nominalRate, serializeJson);
        writer.writeObjectValue<Json>("npery", effectPostRequestBody.npery, serializeJson);
        writer.writeAdditionalData(effectPostRequestBody.additionalData);
}
