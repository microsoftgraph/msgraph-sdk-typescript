import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImExpPostRequestBody} from './imExpPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImExpPostRequestBody(imExpPostRequestBody: ImExpPostRequestBody | undefined = {} as ImExpPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imExpPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
