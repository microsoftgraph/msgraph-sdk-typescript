import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImTanPostRequestBody} from './imTanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImTanPostRequestBody(imTanPostRequestBody: ImTanPostRequestBody | undefined = {} as ImTanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imTanPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
