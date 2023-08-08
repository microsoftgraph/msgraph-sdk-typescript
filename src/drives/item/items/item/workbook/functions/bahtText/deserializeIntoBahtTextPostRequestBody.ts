import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BahtTextPostRequestBody} from './bahtTextPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBahtTextPostRequestBody(bahtTextPostRequestBody: BahtTextPostRequestBody | undefined = {} as BahtTextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bahtTextPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
