import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Hex2DecPostRequestBody} from './hex2DecPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHex2DecPostRequestBody(hex2DecPostRequestBody: Hex2DecPostRequestBody | undefined = {} as Hex2DecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { hex2DecPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
