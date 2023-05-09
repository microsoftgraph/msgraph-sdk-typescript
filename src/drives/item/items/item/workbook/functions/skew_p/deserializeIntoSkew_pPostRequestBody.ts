import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Skew_pPostRequestBody} from './skew_pPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkew_pPostRequestBody(skew_pPostRequestBody: Skew_pPostRequestBody | undefined = {} as Skew_pPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { skew_pPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
