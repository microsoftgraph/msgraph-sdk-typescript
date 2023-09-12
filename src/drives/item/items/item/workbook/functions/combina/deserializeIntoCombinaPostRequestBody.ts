import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CombinaPostRequestBody } from './combinaPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCombinaPostRequestBody(combinaPostRequestBody: CombinaPostRequestBody | undefined = {} as CombinaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { combinaPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberChosen": n => { combinaPostRequestBody.numberChosen = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
