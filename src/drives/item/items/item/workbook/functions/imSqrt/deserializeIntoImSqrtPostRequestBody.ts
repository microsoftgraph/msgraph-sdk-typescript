import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSqrtPostRequestBody} from './imSqrtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSqrtPostRequestBody(imSqrtPostRequestBody: ImSqrtPostRequestBody | undefined = {} as ImSqrtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSqrtPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
