import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DayPostRequestBody } from './dayPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDayPostRequestBody(dayPostRequestBody: DayPostRequestBody | undefined = {} as DayPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { dayPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
