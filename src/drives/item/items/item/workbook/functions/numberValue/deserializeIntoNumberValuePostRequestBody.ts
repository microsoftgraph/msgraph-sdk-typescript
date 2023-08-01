import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NumberValuePostRequestBody} from './numberValuePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNumberValuePostRequestBody(numberValuePostRequestBody: NumberValuePostRequestBody | undefined = {} as NumberValuePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalSeparator": n => { numberValuePostRequestBody.decimalSeparator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "groupSeparator": n => { numberValuePostRequestBody.groupSeparator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { numberValuePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
