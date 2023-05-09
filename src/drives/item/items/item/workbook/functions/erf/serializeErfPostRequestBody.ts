import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ErfPostRequestBody} from './erfPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErfPostRequestBody(writer: SerializationWriter, erfPostRequestBody: ErfPostRequestBody | undefined = {} as ErfPostRequestBody) : void {
        writer.writeObjectValue<Json>("lowerLimit", erfPostRequestBody.lowerLimit, serializeJson);
        writer.writeObjectValue<Json>("upperLimit", erfPostRequestBody.upperLimit, serializeJson);
        writer.writeAdditionalData(erfPostRequestBody.additionalData);
}
