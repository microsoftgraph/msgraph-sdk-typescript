import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DeltaPostRequestBody} from './deltaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaPostRequestBody(deltaPostRequestBody: DeltaPostRequestBody | undefined = {} as DeltaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number1": n => { deltaPostRequestBody.number1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number2": n => { deltaPostRequestBody.number2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
