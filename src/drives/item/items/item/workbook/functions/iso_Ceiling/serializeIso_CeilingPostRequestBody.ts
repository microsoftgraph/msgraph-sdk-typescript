import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Iso_CeilingPostRequestBody} from './iso_CeilingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIso_CeilingPostRequestBody(iso_CeilingPostRequestBody: Iso_CeilingPostRequestBody | undefined = {} as Iso_CeilingPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", iso_CeilingPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", iso_CeilingPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(iso_CeilingPostRequestBody.additionalData);
}
