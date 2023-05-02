import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RadiansPostRequestBody} from './radiansPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRadiansPostRequestBody(writer: SerializationWriter, radiansPostRequestBody: RadiansPostRequestBody | undefined = {} as RadiansPostRequestBody) : void {
        writer.writeObjectValue<Json>("angle", radiansPostRequestBody.angle, serializeJson);
        writer.writeAdditionalData(radiansPostRequestBody.additionalData);
}
