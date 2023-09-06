import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Oct2BinPostRequestBody } from './oct2BinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOct2BinPostRequestBody(oct2BinPostRequestBody: Oct2BinPostRequestBody | undefined = {} as Oct2BinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { oct2BinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { oct2BinPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
