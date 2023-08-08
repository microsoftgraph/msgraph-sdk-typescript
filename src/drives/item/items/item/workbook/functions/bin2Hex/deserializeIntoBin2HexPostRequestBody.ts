import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Bin2HexPostRequestBody} from './bin2HexPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBin2HexPostRequestBody(bin2HexPostRequestBody: Bin2HexPostRequestBody | undefined = {} as Bin2HexPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bin2HexPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { bin2HexPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
