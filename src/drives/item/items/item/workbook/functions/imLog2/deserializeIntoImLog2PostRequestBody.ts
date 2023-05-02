import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImLog2PostRequestBody} from './imLog2PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImLog2PostRequestBody(imLog2PostRequestBody: ImLog2PostRequestBody | undefined = {} as ImLog2PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imLog2PostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
