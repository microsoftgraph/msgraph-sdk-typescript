import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {WeekNumPostRequestBody} from './weekNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWeekNumPostRequestBody(weekNumPostRequestBody: WeekNumPostRequestBody | undefined = {} as WeekNumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "returnType": n => { weekNumPostRequestBody.returnType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "serialNumber": n => { weekNumPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
