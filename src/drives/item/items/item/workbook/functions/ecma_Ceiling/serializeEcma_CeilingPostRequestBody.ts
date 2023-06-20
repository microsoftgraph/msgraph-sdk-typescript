import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Ecma_CeilingPostRequestBody} from './ecma_CeilingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEcma_CeilingPostRequestBody(ecma_CeilingPostRequestBody: Ecma_CeilingPostRequestBody | undefined = {} as Ecma_CeilingPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", ecma_CeilingPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ecma_CeilingPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ecma_CeilingPostRequestBody.additionalData);
}
