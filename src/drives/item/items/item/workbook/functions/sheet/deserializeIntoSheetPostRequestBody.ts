import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SheetPostRequestBody } from './sheetPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSheetPostRequestBody(sheetPostRequestBody: SheetPostRequestBody | undefined = {} as SheetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { sheetPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
