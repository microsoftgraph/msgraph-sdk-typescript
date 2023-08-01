import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NetworkDaysPostRequestBody} from './networkDaysPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkDaysPostRequestBody(networkDaysPostRequestBody: NetworkDaysPostRequestBody | undefined = {} as NetworkDaysPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { networkDaysPostRequestBody.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "holidays": n => { networkDaysPostRequestBody.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { networkDaysPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
