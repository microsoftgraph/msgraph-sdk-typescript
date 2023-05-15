import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Floor_PrecisePostRequestBody} from './floor_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFloor_PrecisePostRequestBody(floor_PrecisePostRequestBody: Floor_PrecisePostRequestBody | undefined = {} as Floor_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { floor_PrecisePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { floor_PrecisePostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
