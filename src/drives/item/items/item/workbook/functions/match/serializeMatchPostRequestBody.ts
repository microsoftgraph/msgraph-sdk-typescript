import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MatchPostRequestBody} from './matchPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMatchPostRequestBody(writer: SerializationWriter, matchPostRequestBody: MatchPostRequestBody | undefined = {} as MatchPostRequestBody) : void {
        writer.writeObjectValue<Json>("lookupArray", matchPostRequestBody.lookupArray, serializeJson);
        writer.writeObjectValue<Json>("lookupValue", matchPostRequestBody.lookupValue, serializeJson);
        writer.writeObjectValue<Json>("matchType", matchPostRequestBody.matchType, serializeJson);
        writer.writeAdditionalData(matchPostRequestBody.additionalData);
}
