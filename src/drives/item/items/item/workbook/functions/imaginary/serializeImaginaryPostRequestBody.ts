import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImaginaryPostRequestBody} from './imaginaryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImaginaryPostRequestBody(imaginaryPostRequestBody: ImaginaryPostRequestBody | undefined = {} as ImaginaryPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imaginaryPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imaginaryPostRequestBody.additionalData);
}
