import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DcountAPostRequestBody } from './dcountAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDcountAPostRequestBody(dcountAPostRequestBody: DcountAPostRequestBody | undefined = {} as DcountAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dcountAPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dcountAPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dcountAPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
