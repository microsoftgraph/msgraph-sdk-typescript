import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BasePostRequestBody} from './basePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBasePostRequestBody(basePostRequestBody: BasePostRequestBody | undefined = {} as BasePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "minLength": n => { basePostRequestBody.minLength = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { basePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "radix": n => { basePostRequestBody.radix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
