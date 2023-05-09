import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HyperlinkPostRequestBody} from './hyperlinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHyperlinkPostRequestBody(hyperlinkPostRequestBody: HyperlinkPostRequestBody | undefined = {} as HyperlinkPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "friendlyName": n => { hyperlinkPostRequestBody.friendlyName = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "linkLocation": n => { hyperlinkPostRequestBody.linkLocation = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
