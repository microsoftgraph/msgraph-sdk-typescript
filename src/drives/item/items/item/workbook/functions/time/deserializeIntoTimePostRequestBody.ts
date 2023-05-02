import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TimePostRequestBody} from './timePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimePostRequestBody(timePostRequestBody: TimePostRequestBody | undefined = {} as TimePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "hour": n => { timePostRequestBody.hour = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "minute": n => { timePostRequestBody.minute = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "second": n => { timePostRequestBody.second = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
