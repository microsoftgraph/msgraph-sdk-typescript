import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MatchPostRequestBody} from './matchPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMatchPostRequestBody(matchPostRequestBody: MatchPostRequestBody | undefined = {} as MatchPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("lookupArray", matchPostRequestBody.lookupArray, serializeJson);
        writer.writeObjectValue<Json>("lookupValue", matchPostRequestBody.lookupValue, serializeJson);
        writer.writeObjectValue<Json>("matchType", matchPostRequestBody.matchType, serializeJson);
        writer.writeAdditionalData(matchPostRequestBody.additionalData);
}
