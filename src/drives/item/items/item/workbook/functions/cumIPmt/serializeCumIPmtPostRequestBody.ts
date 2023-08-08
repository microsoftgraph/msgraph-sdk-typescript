import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CumIPmtPostRequestBody} from './cumIPmtPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCumIPmtPostRequestBody(writer: SerializationWriter, cumIPmtPostRequestBody: CumIPmtPostRequestBody | undefined = {} as CumIPmtPostRequestBody) : void {
        writer.writeObjectValue<Json>("endPeriod", cumIPmtPostRequestBody.endPeriod, serializeJson);
        writer.writeObjectValue<Json>("nper", cumIPmtPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pv", cumIPmtPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", cumIPmtPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("startPeriod", cumIPmtPostRequestBody.startPeriod, serializeJson);
        writer.writeObjectValue<Json>("type", cumIPmtPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(cumIPmtPostRequestBody.additionalData);
}
