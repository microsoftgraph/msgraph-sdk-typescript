import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LenPostRequestBody} from './lenPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLenPostRequestBody(lenPostRequestBody: LenPostRequestBody | undefined = {} as LenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { lenPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
