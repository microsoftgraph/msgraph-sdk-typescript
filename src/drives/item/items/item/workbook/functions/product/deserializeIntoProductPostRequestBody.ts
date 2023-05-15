import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ProductPostRequestBody} from './productPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProductPostRequestBody(productPostRequestBody: ProductPostRequestBody | undefined = {} as ProductPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { productPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
