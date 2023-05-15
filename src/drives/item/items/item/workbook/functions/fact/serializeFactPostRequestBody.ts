import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FactPostRequestBody} from './factPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFactPostRequestBody(writer: SerializationWriter, factPostRequestBody: FactPostRequestBody | undefined = {} as FactPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", factPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(factPostRequestBody.additionalData);
}
