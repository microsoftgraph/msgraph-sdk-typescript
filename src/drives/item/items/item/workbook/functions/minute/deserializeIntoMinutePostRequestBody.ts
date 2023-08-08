import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MinutePostRequestBody} from './minutePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMinutePostRequestBody(minutePostRequestBody: MinutePostRequestBody | undefined = {} as MinutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { minutePostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
