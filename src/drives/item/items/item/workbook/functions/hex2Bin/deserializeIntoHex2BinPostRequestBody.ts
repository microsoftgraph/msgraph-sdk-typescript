import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Hex2BinPostRequestBody} from './hex2BinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHex2BinPostRequestBody(hex2BinPostRequestBody: Hex2BinPostRequestBody | undefined = {} as Hex2BinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { hex2BinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { hex2BinPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
