import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ReceivedPostRequestBody} from './receivedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReceivedPostRequestBody(writer: SerializationWriter, receivedPostRequestBody: ReceivedPostRequestBody | undefined = {} as ReceivedPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", receivedPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("discount", receivedPostRequestBody.discount, serializeJson);
        writer.writeObjectValue<Json>("investment", receivedPostRequestBody.investment, serializeJson);
        writer.writeObjectValue<Json>("maturity", receivedPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", receivedPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(receivedPostRequestBody.additionalData);
}
