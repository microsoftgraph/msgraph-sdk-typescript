import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EffectPostRequestBody} from './effectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEffectPostRequestBody(effectPostRequestBody: EffectPostRequestBody | undefined = {} as EffectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "nominalRate": n => { effectPostRequestBody.nominalRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "npery": n => { effectPostRequestBody.npery = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
