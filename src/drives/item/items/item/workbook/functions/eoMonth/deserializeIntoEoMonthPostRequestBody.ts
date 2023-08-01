import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {EoMonthPostRequestBody} from './eoMonthPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEoMonthPostRequestBody(eoMonthPostRequestBody: EoMonthPostRequestBody | undefined = {} as EoMonthPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "months": n => { eoMonthPostRequestBody.months = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { eoMonthPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
