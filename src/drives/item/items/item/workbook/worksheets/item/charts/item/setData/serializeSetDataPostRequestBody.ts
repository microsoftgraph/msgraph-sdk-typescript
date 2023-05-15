import {Json} from '../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../models/serializeJson';
import {SetDataPostRequestBody} from './setDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetDataPostRequestBody(writer: SerializationWriter, setDataPostRequestBody: SetDataPostRequestBody | undefined = {} as SetDataPostRequestBody) : void {
        writer.writeStringValue("seriesBy", setDataPostRequestBody.seriesBy);
        writer.writeObjectValue<Json>("sourceData", setDataPostRequestBody.sourceData, serializeJson);
        writer.writeAdditionalData(setDataPostRequestBody.additionalData);
}
