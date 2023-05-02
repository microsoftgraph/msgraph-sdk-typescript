import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Floor_MathPostRequestBody} from './floor_MathPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFloor_MathPostRequestBody(floor_MathPostRequestBody: Floor_MathPostRequestBody | undefined = {} as Floor_MathPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { floor_MathPostRequestBody.mode = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { floor_MathPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { floor_MathPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
