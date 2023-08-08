import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NetworkDays_IntlPostRequestBody} from './networkDays_IntlPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNetworkDays_IntlPostRequestBody(writer: SerializationWriter, networkDays_IntlPostRequestBody: NetworkDays_IntlPostRequestBody | undefined = {} as NetworkDays_IntlPostRequestBody) : void {
        writer.writeObjectValue<Json>("endDate", networkDays_IntlPostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("holidays", networkDays_IntlPostRequestBody.holidays, serializeJson);
        writer.writeObjectValue<Json>("startDate", networkDays_IntlPostRequestBody.startDate, serializeJson);
        writer.writeObjectValue<Json>("weekend", networkDays_IntlPostRequestBody.weekend, serializeJson);
        writer.writeAdditionalData(networkDays_IntlPostRequestBody.additionalData);
}
