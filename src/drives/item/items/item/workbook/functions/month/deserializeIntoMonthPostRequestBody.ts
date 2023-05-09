import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MonthPostRequestBody} from './monthPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMonthPostRequestBody(monthPostRequestBody: MonthPostRequestBody | undefined = {} as MonthPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { monthPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
