import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ColumnsPostRequestBody } from './columnsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnsPostRequestBody(columnsPostRequestBody: ColumnsPostRequestBody | undefined = {} as ColumnsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { columnsPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
