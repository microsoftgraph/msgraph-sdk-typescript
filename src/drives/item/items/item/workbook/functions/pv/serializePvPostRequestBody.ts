import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PvPostRequestBody} from './pvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePvPostRequestBody(writer: SerializationWriter, pvPostRequestBody: PvPostRequestBody | undefined = {} as PvPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", pvPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("nper", pvPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pmt", pvPostRequestBody.pmt, serializeJson);
        writer.writeObjectValue<Json>("rate", pvPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", pvPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(pvPostRequestBody.additionalData);
}
