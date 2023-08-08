import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSecPostRequestBody} from './imSecPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSecPostRequestBody(imSecPostRequestBody: ImSecPostRequestBody | undefined = {} as ImSecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSecPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
