import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Var_PPostRequestBody} from './var_PPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVar_PPostRequestBody(writer: SerializationWriter, var_PPostRequestBody: Var_PPostRequestBody | undefined = {} as Var_PPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", var_PPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(var_PPostRequestBody.additionalData);
}
