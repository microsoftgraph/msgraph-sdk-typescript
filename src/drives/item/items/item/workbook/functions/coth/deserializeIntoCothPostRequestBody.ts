import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CothPostRequestBody} from './cothPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCothPostRequestBody(cothPostRequestBody: CothPostRequestBody | undefined = {} as CothPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cothPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
