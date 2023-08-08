import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GcdPostRequestBody} from './gcdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGcdPostRequestBody(gcdPostRequestBody: GcdPostRequestBody | undefined = {} as GcdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { gcdPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
