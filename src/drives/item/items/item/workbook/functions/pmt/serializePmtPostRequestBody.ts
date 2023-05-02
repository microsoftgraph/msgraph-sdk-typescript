import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PmtPostRequestBody} from './pmtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePmtPostRequestBody(writer: SerializationWriter, pmtPostRequestBody: PmtPostRequestBody | undefined = {} as PmtPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", pmtPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("nper", pmtPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pv", pmtPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", pmtPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", pmtPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(pmtPostRequestBody.additionalData);
}
