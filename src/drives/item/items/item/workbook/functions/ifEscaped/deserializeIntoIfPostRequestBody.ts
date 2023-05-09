import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IfPostRequestBody} from './ifPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIfPostRequestBody(ifPostRequestBody: IfPostRequestBody | undefined = {} as IfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "logicalTest": n => { ifPostRequestBody.logicalTest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "valueIfFalse": n => { ifPostRequestBody.valueIfFalse = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "valueIfTrue": n => { ifPostRequestBody.valueIfTrue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
