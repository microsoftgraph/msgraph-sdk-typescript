import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RadiansPostRequestBody} from './radiansPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRadiansPostRequestBody(writer: SerializationWriter, radiansPostRequestBody: RadiansPostRequestBody | undefined = {} as RadiansPostRequestBody) : void {
        writer.writeObjectValue<Json>("angle", radiansPostRequestBody.angle, serializeJson);
        writer.writeAdditionalData(radiansPostRequestBody.additionalData);
}
