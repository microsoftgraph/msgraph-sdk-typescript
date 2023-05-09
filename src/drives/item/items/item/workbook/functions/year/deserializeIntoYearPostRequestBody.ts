import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {YearPostRequestBody} from './yearPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoYearPostRequestBody(yearPostRequestBody: YearPostRequestBody | undefined = {} as YearPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "serialNumber": n => { yearPostRequestBody.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
