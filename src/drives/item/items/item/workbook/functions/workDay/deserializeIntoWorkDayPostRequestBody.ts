import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {WorkDayPostRequestBody} from './workDayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkDayPostRequestBody(workDayPostRequestBody: WorkDayPostRequestBody | undefined = {} as WorkDayPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "days": n => { workDayPostRequestBody.days = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "holidays": n => { workDayPostRequestBody.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { workDayPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
