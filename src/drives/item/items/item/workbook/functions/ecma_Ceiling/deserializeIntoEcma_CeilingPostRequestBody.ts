import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Ecma_CeilingPostRequestBody } from './ecma_CeilingPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEcma_CeilingPostRequestBody(ecma_CeilingPostRequestBody: Ecma_CeilingPostRequestBody | undefined = {} as Ecma_CeilingPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { ecma_CeilingPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { ecma_CeilingPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
