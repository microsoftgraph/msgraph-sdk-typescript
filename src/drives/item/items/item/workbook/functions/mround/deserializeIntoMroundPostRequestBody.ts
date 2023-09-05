import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MroundPostRequestBody } from './mroundPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMroundPostRequestBody(mroundPostRequestBody: MroundPostRequestBody | undefined = {} as MroundPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "multiple": n => { mroundPostRequestBody.multiple = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { mroundPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
