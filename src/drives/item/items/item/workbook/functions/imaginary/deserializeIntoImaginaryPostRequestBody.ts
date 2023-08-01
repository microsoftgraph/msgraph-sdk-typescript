import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImaginaryPostRequestBody} from './imaginaryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImaginaryPostRequestBody(imaginaryPostRequestBody: ImaginaryPostRequestBody | undefined = {} as ImaginaryPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imaginaryPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
