import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DaysPostRequestBody} from './daysPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDaysPostRequestBody(daysPostRequestBody: DaysPostRequestBody | undefined = {} as DaysPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { daysPostRequestBody.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { daysPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
