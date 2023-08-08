import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsEvenPostRequestBody} from './isEvenPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsEvenPostRequestBody(isEvenPostRequestBody: IsEvenPostRequestBody | undefined = {} as IsEvenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { isEvenPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
