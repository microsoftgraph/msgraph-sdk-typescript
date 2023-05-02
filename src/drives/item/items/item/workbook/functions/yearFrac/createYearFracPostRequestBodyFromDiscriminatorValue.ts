import {deserializeIntoYearFracPostRequestBody} from './deserializeIntoYearFracPostRequestBody';
import {YearFracPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYearFracPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYearFracPostRequestBody;
}
