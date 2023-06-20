import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LnPostRequestBody} from './lnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLnPostRequestBody(lnPostRequestBody: LnPostRequestBody | undefined = {} as LnPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", lnPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(lnPostRequestBody.additionalData);
}
