import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CombinPostRequestBody} from './combinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCombinPostRequestBody(combinPostRequestBody: CombinPostRequestBody | undefined = {} as CombinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { combinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberChosen": n => { combinPostRequestBody.numberChosen = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
