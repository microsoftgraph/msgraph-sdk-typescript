import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GeStepPostRequestBody} from './geStepPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeStepPostRequestBody(geStepPostRequestBody: GeStepPostRequestBody | undefined = {} as GeStepPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { geStepPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "step": n => { geStepPostRequestBody.step = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
