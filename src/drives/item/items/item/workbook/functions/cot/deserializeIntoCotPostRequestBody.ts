import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CotPostRequestBody} from './cotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCotPostRequestBody(cotPostRequestBody: CotPostRequestBody | undefined = {} as CotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cotPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
