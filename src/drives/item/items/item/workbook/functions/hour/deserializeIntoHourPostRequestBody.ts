import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HourPostRequestBody} from './hourPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHourPostRequestBody(hourPostRequestBody: HourPostRequestBody | undefined = {} as HourPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { hourPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
