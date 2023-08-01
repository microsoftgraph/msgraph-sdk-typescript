import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GcdPostRequestBody} from './gcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGcdPostRequestBody(writer: SerializationWriter, gcdPostRequestBody: GcdPostRequestBody | undefined = {} as GcdPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", gcdPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(gcdPostRequestBody.additionalData);
}
