import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PdurationPostRequestBody} from './pdurationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePdurationPostRequestBody(writer: SerializationWriter, pdurationPostRequestBody: PdurationPostRequestBody | undefined = {} as PdurationPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", pdurationPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("pv", pdurationPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", pdurationPostRequestBody.rate, serializeJson);
        writer.writeAdditionalData(pdurationPostRequestBody.additionalData);
}
