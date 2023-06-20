import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GaussPostRequestBody} from './gaussPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGaussPostRequestBody(gaussPostRequestBody: GaussPostRequestBody | undefined = {} as GaussPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", gaussPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(gaussPostRequestBody.additionalData);
}
