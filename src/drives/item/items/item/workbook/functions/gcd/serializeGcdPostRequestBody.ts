import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GcdPostRequestBody} from './gcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGcdPostRequestBody(gcdPostRequestBody: GcdPostRequestBody | undefined = {} as GcdPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", gcdPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(gcdPostRequestBody.additionalData);
}
