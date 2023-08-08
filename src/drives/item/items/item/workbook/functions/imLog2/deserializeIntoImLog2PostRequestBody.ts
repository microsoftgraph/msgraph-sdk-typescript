import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImLog2PostRequestBody} from './imLog2PostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImLog2PostRequestBody(imLog2PostRequestBody: ImLog2PostRequestBody | undefined = {} as ImLog2PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imLog2PostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
