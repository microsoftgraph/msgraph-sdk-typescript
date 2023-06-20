import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FactDoublePostRequestBody} from './factDoublePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFactDoublePostRequestBody(factDoublePostRequestBody: FactDoublePostRequestBody | undefined = {} as FactDoublePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", factDoublePostRequestBody.number, serializeJson);
        writer.writeAdditionalData(factDoublePostRequestBody.additionalData);
}
