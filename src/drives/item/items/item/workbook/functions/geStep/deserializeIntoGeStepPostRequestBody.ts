import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GeStepPostRequestBody} from './geStepPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeStepPostRequestBody(geStepPostRequestBody: GeStepPostRequestBody | undefined = {} as GeStepPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { geStepPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "step": n => { geStepPostRequestBody.step = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
