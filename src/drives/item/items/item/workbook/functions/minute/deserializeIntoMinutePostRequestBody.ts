import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MinutePostRequestBody} from './minutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMinutePostRequestBody(minutePostRequestBody: MinutePostRequestBody | undefined = {} as MinutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { minutePostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
