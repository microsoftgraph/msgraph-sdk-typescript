import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DayPostRequestBody} from './dayPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDayPostRequestBody(dayPostRequestBody: DayPostRequestBody | undefined = {} as DayPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { dayPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
