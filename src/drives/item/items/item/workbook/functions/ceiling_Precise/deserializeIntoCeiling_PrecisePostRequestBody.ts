import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Ceiling_PrecisePostRequestBody} from './ceiling_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCeiling_PrecisePostRequestBody(ceiling_PrecisePostRequestBody: Ceiling_PrecisePostRequestBody | undefined = {} as Ceiling_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { ceiling_PrecisePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { ceiling_PrecisePostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
