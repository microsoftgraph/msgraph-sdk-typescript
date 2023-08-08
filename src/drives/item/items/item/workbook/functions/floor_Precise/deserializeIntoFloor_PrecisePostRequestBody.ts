import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Floor_PrecisePostRequestBody} from './floor_PrecisePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFloor_PrecisePostRequestBody(floor_PrecisePostRequestBody: Floor_PrecisePostRequestBody | undefined = {} as Floor_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { floor_PrecisePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { floor_PrecisePostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
