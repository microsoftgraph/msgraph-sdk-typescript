import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GaussPostRequestBody} from './gaussPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGaussPostRequestBody(writer: SerializationWriter, gaussPostRequestBody: GaussPostRequestBody | undefined = {} as GaussPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", gaussPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gaussPostRequestBody.additionalData);
}
