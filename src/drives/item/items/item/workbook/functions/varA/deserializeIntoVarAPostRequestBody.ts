import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {VarAPostRequestBody} from './varAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVarAPostRequestBody(varAPostRequestBody: VarAPostRequestBody | undefined = {} as VarAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { varAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
