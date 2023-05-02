import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SignPostRequestBody} from './signPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignPostRequestBody(writer: SerializationWriter, signPostRequestBody: SignPostRequestBody | undefined = {} as SignPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", signPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(signPostRequestBody.additionalData);
}
