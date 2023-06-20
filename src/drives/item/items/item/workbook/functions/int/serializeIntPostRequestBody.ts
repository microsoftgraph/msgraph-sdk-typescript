import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IntPostRequestBody} from './intPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntPostRequestBody(intPostRequestBody: IntPostRequestBody | undefined = {} as IntPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", intPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(intPostRequestBody.additionalData);
}
