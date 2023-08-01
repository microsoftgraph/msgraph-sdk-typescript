import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SecPostRequestBody} from './secPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecPostRequestBody(writer: SerializationWriter, secPostRequestBody: SecPostRequestBody | undefined = {} as SecPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", secPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(secPostRequestBody.additionalData);
}
