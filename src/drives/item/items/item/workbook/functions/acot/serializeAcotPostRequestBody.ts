import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcotPostRequestBody} from './acotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcotPostRequestBody(writer: SerializationWriter, acotPostRequestBody: AcotPostRequestBody | undefined = {} as AcotPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acotPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acotPostRequestBody.additionalData);
}
