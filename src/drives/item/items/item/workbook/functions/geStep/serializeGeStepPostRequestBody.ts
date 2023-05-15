import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GeStepPostRequestBody} from './geStepPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeStepPostRequestBody(writer: SerializationWriter, geStepPostRequestBody: GeStepPostRequestBody | undefined = {} as GeStepPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", geStepPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("step", geStepPostRequestBody.step, serializeJson);
        writer.writeAdditionalData(geStepPostRequestBody.additionalData);
}
