import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RowsPostRequestBody } from './rowsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRowsPostRequestBody(rowsPostRequestBody: RowsPostRequestBody | undefined = {} as RowsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { rowsPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
