import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Dec2BinPostRequestBody} from './dec2BinPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDec2BinPostRequestBody(dec2BinPostRequestBody: Dec2BinPostRequestBody | undefined = {} as Dec2BinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { dec2BinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2BinPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
