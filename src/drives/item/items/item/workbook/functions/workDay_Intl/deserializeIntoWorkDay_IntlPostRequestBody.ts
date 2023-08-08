import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {WorkDay_IntlPostRequestBody} from './workDay_IntlPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkDay_IntlPostRequestBody(workDay_IntlPostRequestBody: WorkDay_IntlPostRequestBody | undefined = {} as WorkDay_IntlPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "days": n => { workDay_IntlPostRequestBody.days = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "holidays": n => { workDay_IntlPostRequestBody.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { workDay_IntlPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "weekend": n => { workDay_IntlPostRequestBody.weekend = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
