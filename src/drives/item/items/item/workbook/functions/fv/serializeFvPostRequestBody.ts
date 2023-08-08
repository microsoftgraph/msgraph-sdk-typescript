import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FvPostRequestBody} from './fvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFvPostRequestBody(writer: SerializationWriter, fvPostRequestBody: FvPostRequestBody | undefined = {} as FvPostRequestBody) : void {
        writer.writeObjectValue<Json>("nper", fvPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pmt", fvPostRequestBody.pmt, serializeJson);
        writer.writeObjectValue<Json>("pv", fvPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", fvPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("type", fvPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(fvPostRequestBody.additionalData);
}
