import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BahtTextPostRequestBody} from './bahtTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBahtTextPostRequestBody(bahtTextPostRequestBody: BahtTextPostRequestBody | undefined = {} as BahtTextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bahtTextPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
