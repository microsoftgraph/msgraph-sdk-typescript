import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {HourPostRequestBody} from './hourPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHourPostRequestBody(hourPostRequestBody: HourPostRequestBody | undefined = {} as HourPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { hourPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
