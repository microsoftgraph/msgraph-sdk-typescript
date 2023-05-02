import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselJPostRequestBody} from './besselJPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselJPostRequestBody(writer: SerializationWriter, besselJPostRequestBody: BesselJPostRequestBody | undefined = {} as BesselJPostRequestBody) : void {
        writer.writeObjectValue<Json>("n", besselJPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselJPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselJPostRequestBody.additionalData);
}
