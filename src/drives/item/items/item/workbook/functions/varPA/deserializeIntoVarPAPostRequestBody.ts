import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {VarPAPostRequestBody} from './varPAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVarPAPostRequestBody(varPAPostRequestBody: VarPAPostRequestBody | undefined = {} as VarPAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { varPAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
