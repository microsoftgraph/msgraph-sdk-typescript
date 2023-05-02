import {Json} from '../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../models/serializeJson';
import {SetPositionPostRequestBody} from './setPositionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetPositionPostRequestBody(writer: SerializationWriter, setPositionPostRequestBody: SetPositionPostRequestBody | undefined = {} as SetPositionPostRequestBody) : void {
        writer.writeObjectValue<Json>("endCell", setPositionPostRequestBody.endCell, serializeJson);
        writer.writeObjectValue<Json>("startCell", setPositionPostRequestBody.startCell, serializeJson);
        writer.writeAdditionalData(setPositionPostRequestBody.additionalData);
}
