import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Oct2HexPostRequestBody} from './oct2HexPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOct2HexPostRequestBody(writer: SerializationWriter, oct2HexPostRequestBody: Oct2HexPostRequestBody | undefined = {} as Oct2HexPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", oct2HexPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", oct2HexPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(oct2HexPostRequestBody.additionalData);
}
