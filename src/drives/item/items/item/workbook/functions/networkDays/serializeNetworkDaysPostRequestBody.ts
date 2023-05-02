import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NetworkDaysPostRequestBody} from './networkDaysPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNetworkDaysPostRequestBody(writer: SerializationWriter, networkDaysPostRequestBody: NetworkDaysPostRequestBody | undefined = {} as NetworkDaysPostRequestBody) : void {
        writer.writeObjectValue<Json>("endDate", networkDaysPostRequestBody.endDate, serializeJson);
        writer.writeObjectValue<Json>("holidays", networkDaysPostRequestBody.holidays, serializeJson);
        writer.writeObjectValue<Json>("startDate", networkDaysPostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(networkDaysPostRequestBody.additionalData);
}
