import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Bin2DecPostRequestBody } from './bin2DecPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBin2DecPostRequestBody(bin2DecPostRequestBody: Bin2DecPostRequestBody | undefined = {} as Bin2DecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bin2DecPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
