import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DatePostRequestBody} from './datePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDatePostRequestBody(datePostRequestBody: DatePostRequestBody | undefined = {} as DatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "day": n => { datePostRequestBody.day = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "month": n => { datePostRequestBody.month = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "year": n => { datePostRequestBody.year = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
