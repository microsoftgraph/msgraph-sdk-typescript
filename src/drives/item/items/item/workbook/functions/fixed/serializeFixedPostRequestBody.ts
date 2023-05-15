import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FixedPostRequestBody} from './fixedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFixedPostRequestBody(writer: SerializationWriter, fixedPostRequestBody: FixedPostRequestBody | undefined = {} as FixedPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimals", fixedPostRequestBody.decimals, serializeJson);
        writer.writeObjectValue<Json>("noCommas", fixedPostRequestBody.noCommas, serializeJson);
        writer.writeObjectValue<Json>("number", fixedPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(fixedPostRequestBody.additionalData);
}
