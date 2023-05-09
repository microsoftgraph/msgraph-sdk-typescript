import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AsinPostRequestBody} from './asinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAsinPostRequestBody(writer: SerializationWriter, asinPostRequestBody: AsinPostRequestBody | undefined = {} as AsinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", asinPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(asinPostRequestBody.additionalData);
}
