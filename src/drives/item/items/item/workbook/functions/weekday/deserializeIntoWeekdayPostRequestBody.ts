import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {WeekdayPostRequestBody} from './weekdayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWeekdayPostRequestBody(weekdayPostRequestBody: WeekdayPostRequestBody | undefined = {} as WeekdayPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "returnType": n => { weekdayPostRequestBody.returnType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "serialNumber": n => { weekdayPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
