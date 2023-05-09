import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HlookupPostRequestBody} from './hlookupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHlookupPostRequestBody(writer: SerializationWriter, hlookupPostRequestBody: HlookupPostRequestBody | undefined = {} as HlookupPostRequestBody) : void {
        writer.writeObjectValue<Json>("lookupValue", hlookupPostRequestBody.lookupValue, serializeJson);
        writer.writeObjectValue<Json>("rangeLookup", hlookupPostRequestBody.rangeLookup, serializeJson);
        writer.writeObjectValue<Json>("rowIndexNum", hlookupPostRequestBody.rowIndexNum, serializeJson);
        writer.writeObjectValue<Json>("tableArray", hlookupPostRequestBody.tableArray, serializeJson);
        writer.writeAdditionalData(hlookupPostRequestBody.additionalData);
}
