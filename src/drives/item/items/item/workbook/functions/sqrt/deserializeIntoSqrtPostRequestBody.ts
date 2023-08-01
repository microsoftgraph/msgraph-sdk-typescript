import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SqrtPostRequestBody} from './sqrtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSqrtPostRequestBody(sqrtPostRequestBody: SqrtPostRequestBody | undefined = {} as SqrtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sqrtPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
