import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type YearPostRequestBody } from './yearPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoYearPostRequestBody(yearPostRequestBody: YearPostRequestBody | undefined = {} as YearPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { yearPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
