import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BesselYPostRequestBody} from './besselYPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBesselYPostRequestBody(writer: SerializationWriter, besselYPostRequestBody: BesselYPostRequestBody | undefined = {} as BesselYPostRequestBody) : void {
        writer.writeObjectValue<Json>("n", besselYPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", besselYPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(besselYPostRequestBody.additionalData);
}
