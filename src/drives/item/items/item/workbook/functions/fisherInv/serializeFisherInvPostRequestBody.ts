import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FisherInvPostRequestBody} from './fisherInvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFisherInvPostRequestBody(writer: SerializationWriter, fisherInvPostRequestBody: FisherInvPostRequestBody | undefined = {} as FisherInvPostRequestBody) : void {
        writer.writeObjectValue<Json>("y", fisherInvPostRequestBody.y, serializeJson);
        writer.writeAdditionalData(fisherInvPostRequestBody.additionalData);
}
