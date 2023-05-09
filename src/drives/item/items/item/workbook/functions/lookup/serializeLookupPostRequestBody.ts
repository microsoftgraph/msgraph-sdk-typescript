import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LookupPostRequestBody} from './lookupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLookupPostRequestBody(writer: SerializationWriter, lookupPostRequestBody: LookupPostRequestBody | undefined = {} as LookupPostRequestBody) : void {
        writer.writeObjectValue<Json>("lookupValue", lookupPostRequestBody.lookupValue, serializeJson);
        writer.writeObjectValue<Json>("lookupVector", lookupPostRequestBody.lookupVector, serializeJson);
        writer.writeObjectValue<Json>("resultVector", lookupPostRequestBody.resultVector, serializeJson);
        writer.writeAdditionalData(lookupPostRequestBody.additionalData);
}
