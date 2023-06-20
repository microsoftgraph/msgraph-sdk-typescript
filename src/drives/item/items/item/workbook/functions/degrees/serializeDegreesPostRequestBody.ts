import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DegreesPostRequestBody} from './degreesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDegreesPostRequestBody(degreesPostRequestBody: DegreesPostRequestBody | undefined = {} as DegreesPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("angle", degreesPostRequestBody.angle, serializeJson);
        writer.writeAdditionalData(degreesPostRequestBody.additionalData);
}
