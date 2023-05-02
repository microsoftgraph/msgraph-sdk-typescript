import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsEvenPostRequestBody} from './isEvenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsEvenPostRequestBody(isEvenPostRequestBody: IsEvenPostRequestBody | undefined = {} as IsEvenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { isEvenPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
