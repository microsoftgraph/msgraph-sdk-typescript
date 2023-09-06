import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImLog10PostRequestBody } from './imLog10PostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImLog10PostRequestBody(imLog10PostRequestBody: ImLog10PostRequestBody | undefined = {} as ImLog10PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imLog10PostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
