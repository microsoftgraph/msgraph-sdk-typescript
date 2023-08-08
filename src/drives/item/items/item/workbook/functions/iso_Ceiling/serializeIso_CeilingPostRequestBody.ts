import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Iso_CeilingPostRequestBody} from './iso_CeilingPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIso_CeilingPostRequestBody(writer: SerializationWriter, iso_CeilingPostRequestBody: Iso_CeilingPostRequestBody | undefined = {} as Iso_CeilingPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", iso_CeilingPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", iso_CeilingPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(iso_CeilingPostRequestBody.additionalData);
}
