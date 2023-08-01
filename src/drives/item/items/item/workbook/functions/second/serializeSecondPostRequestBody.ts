import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SecondPostRequestBody} from './secondPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecondPostRequestBody(writer: SerializationWriter, secondPostRequestBody: SecondPostRequestBody | undefined = {} as SecondPostRequestBody) : void {
        writer.writeObjectValue<Json>("serialNumber", secondPostRequestBody.serialNumber, serializeJson);
        writer.writeAdditionalData(secondPostRequestBody.additionalData);
}
