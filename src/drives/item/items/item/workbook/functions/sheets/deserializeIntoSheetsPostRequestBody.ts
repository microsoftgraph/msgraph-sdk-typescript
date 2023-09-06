import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SheetsPostRequestBody } from './sheetsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSheetsPostRequestBody(sheetsPostRequestBody: SheetsPostRequestBody | undefined = {} as SheetsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reference": n => { sheetsPostRequestBody.reference = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
