import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Dec2HexPostRequestBody} from './dec2HexPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDec2HexPostRequestBody(dec2HexPostRequestBody: Dec2HexPostRequestBody | undefined = {} as Dec2HexPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { dec2HexPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2HexPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
