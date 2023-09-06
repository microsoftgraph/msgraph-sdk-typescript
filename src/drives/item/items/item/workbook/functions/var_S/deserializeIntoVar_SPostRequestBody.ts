import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Var_SPostRequestBody } from './var_SPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoVar_SPostRequestBody(var_SPostRequestBody: Var_SPostRequestBody | undefined = {} as Var_SPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { var_SPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
