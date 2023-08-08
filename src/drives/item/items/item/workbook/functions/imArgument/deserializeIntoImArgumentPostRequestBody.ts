import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImArgumentPostRequestBody} from './imArgumentPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImArgumentPostRequestBody(imArgumentPostRequestBody: ImArgumentPostRequestBody | undefined = {} as ImArgumentPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imArgumentPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
