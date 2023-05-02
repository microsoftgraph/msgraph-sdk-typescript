import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsFormulaPostRequestBody} from './isFormulaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsFormulaPostRequestBody(isFormulaPostRequestBody: IsFormulaPostRequestBody | undefined = {} as IsFormulaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reference": n => { isFormulaPostRequestBody.reference = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
