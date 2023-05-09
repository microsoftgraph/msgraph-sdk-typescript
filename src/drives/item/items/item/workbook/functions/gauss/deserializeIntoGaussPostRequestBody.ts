import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GaussPostRequestBody} from './gaussPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGaussPostRequestBody(gaussPostRequestBody: GaussPostRequestBody | undefined = {} as GaussPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gaussPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
