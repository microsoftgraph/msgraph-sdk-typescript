import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Var_PPostRequestBody } from './var_PPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoVar_PPostRequestBody(var_PPostRequestBody: Var_PPostRequestBody | undefined = {} as Var_PPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { var_PPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
