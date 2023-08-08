import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ModPostRequestBody} from './modPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoModPostRequestBody(modPostRequestBody: ModPostRequestBody | undefined = {} as ModPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "divisor": n => { modPostRequestBody.divisor = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { modPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
