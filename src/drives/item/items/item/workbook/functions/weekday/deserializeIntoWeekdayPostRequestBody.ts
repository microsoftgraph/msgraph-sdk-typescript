import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {WeekdayPostRequestBody} from './weekdayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWeekdayPostRequestBody(weekdayPostRequestBody: WeekdayPostRequestBody | undefined = {} as WeekdayPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "returnType": n => { weekdayPostRequestBody.returnType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "serialNumber": n => { weekdayPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
