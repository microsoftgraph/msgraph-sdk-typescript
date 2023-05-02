import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselIPostRequestBody} from './besselIPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselIPostRequestBody(writer: SerializationWriter, besselIPostRequestBody: BesselIPostRequestBody | undefined = {} as BesselIPostRequestBody) : void {
        writer.writeObjectValue<Json>("n", besselIPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselIPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselIPostRequestBody.additionalData);
}
