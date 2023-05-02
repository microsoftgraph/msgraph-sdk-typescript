import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Var_SPostRequestBody} from './var_SPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVar_SPostRequestBody(writer: SerializationWriter, var_SPostRequestBody: Var_SPostRequestBody | undefined = {} as Var_SPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", var_SPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(var_SPostRequestBody.additionalData);
}
