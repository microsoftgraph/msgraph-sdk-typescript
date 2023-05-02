import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {VlookupPostRequestBody} from './vlookupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVlookupPostRequestBody(writer: SerializationWriter, vlookupPostRequestBody: VlookupPostRequestBody | undefined = {} as VlookupPostRequestBody) : void {
        writer.writeObjectValue<Json>("colIndexNum", vlookupPostRequestBody.colIndexNum, serializeJson);
        writer.writeObjectValue<Json>("lookupValue", vlookupPostRequestBody.lookupValue, serializeJson);
        writer.writeObjectValue<Json>("rangeLookup", vlookupPostRequestBody.rangeLookup, serializeJson);
        writer.writeObjectValue<Json>("tableArray", vlookupPostRequestBody.tableArray, serializeJson);
        writer.writeAdditionalData(vlookupPostRequestBody.additionalData);
}
