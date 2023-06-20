import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselIPostRequestBody} from './besselIPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselIPostRequestBody(besselIPostRequestBody: BesselIPostRequestBody | undefined = {} as BesselIPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("n", besselIPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselIPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselIPostRequestBody.additionalData);
}
