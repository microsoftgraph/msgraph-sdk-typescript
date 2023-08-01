import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BesselKPostRequestBody} from './besselKPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselKPostRequestBody(writer: SerializationWriter, besselKPostRequestBody: BesselKPostRequestBody | undefined = {} as BesselKPostRequestBody) : void {
        writer.writeObjectValue<Json>("n", besselKPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselKPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselKPostRequestBody.additionalData);
}
