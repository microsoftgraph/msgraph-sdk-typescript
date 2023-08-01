import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LcmPostRequestBody} from './lcmPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLcmPostRequestBody(writer: SerializationWriter, lcmPostRequestBody: LcmPostRequestBody | undefined = {} as LcmPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", lcmPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(lcmPostRequestBody.additionalData);
}
