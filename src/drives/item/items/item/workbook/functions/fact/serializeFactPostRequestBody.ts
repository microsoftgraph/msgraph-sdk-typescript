import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FactPostRequestBody} from './factPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFactPostRequestBody(factPostRequestBody: FactPostRequestBody | undefined = {} as FactPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", factPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(factPostRequestBody.additionalData);
}
