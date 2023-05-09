import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Var_PPostRequestBody} from './var_PPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVar_PPostRequestBody(var_PPostRequestBody: Var_PPostRequestBody | undefined = {} as Var_PPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { var_PPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
