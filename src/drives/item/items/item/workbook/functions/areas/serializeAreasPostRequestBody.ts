import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AreasPostRequestBody} from './areasPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAreasPostRequestBody(areasPostRequestBody: AreasPostRequestBody | undefined = {} as AreasPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("reference", areasPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(areasPostRequestBody.additionalData);
}
