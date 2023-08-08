import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Ceiling_MathPostRequestBody} from './ceiling_MathPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCeiling_MathPostRequestBody(ceiling_MathPostRequestBody: Ceiling_MathPostRequestBody | undefined = {} as Ceiling_MathPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { ceiling_MathPostRequestBody.mode = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { ceiling_MathPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { ceiling_MathPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
