import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Dec2OctPostRequestBody} from './dec2OctPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDec2OctPostRequestBody(dec2OctPostRequestBody: Dec2OctPostRequestBody | undefined = {} as Dec2OctPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { dec2OctPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2OctPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
