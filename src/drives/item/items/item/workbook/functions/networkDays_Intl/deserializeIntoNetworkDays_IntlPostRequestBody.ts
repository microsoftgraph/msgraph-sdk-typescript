import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NetworkDays_IntlPostRequestBody } from './networkDays_IntlPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkDays_IntlPostRequestBody(networkDays_IntlPostRequestBody: NetworkDays_IntlPostRequestBody | undefined = {} as NetworkDays_IntlPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { networkDays_IntlPostRequestBody.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "holidays": n => { networkDays_IntlPostRequestBody.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { networkDays_IntlPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "weekend": n => { networkDays_IntlPostRequestBody.weekend = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
