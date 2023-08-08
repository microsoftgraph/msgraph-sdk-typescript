import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CschPostRequestBody} from './cschPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCschPostRequestBody(cschPostRequestBody: CschPostRequestBody | undefined = {} as CschPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cschPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
