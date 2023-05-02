import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CosPostRequestBody} from './cosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCosPostRequestBody(cosPostRequestBody: CosPostRequestBody | undefined = {} as CosPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cosPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
