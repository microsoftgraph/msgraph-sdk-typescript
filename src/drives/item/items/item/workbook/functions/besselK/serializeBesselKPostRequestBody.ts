import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselKPostRequestBody} from './besselKPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselKPostRequestBody(besselKPostRequestBody: BesselKPostRequestBody | undefined = {} as BesselKPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("n", besselKPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselKPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselKPostRequestBody.additionalData);
}
