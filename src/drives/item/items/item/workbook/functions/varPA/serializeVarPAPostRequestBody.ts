import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {VarPAPostRequestBody} from './varPAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVarPAPostRequestBody(writer: SerializationWriter, varPAPostRequestBody: VarPAPostRequestBody | undefined = {} as VarPAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", varPAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(varPAPostRequestBody.additionalData);
}
