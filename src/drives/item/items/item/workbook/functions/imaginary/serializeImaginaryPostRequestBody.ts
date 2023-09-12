import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImaginaryPostRequestBody } from './imaginaryPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImaginaryPostRequestBody(writer: SerializationWriter, imaginaryPostRequestBody: ImaginaryPostRequestBody | undefined = {} as ImaginaryPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imaginaryPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imaginaryPostRequestBody.additionalData);
}
