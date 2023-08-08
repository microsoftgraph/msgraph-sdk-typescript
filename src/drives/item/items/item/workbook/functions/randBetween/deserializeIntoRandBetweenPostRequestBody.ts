import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RandBetweenPostRequestBody} from './randBetweenPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRandBetweenPostRequestBody(randBetweenPostRequestBody: RandBetweenPostRequestBody | undefined = {} as RandBetweenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "bottom": n => { randBetweenPostRequestBody.bottom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "top": n => { randBetweenPostRequestBody.top = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
