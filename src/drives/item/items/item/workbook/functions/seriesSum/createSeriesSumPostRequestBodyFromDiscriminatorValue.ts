import {deserializeIntoSeriesSumPostRequestBody} from './deserializeIntoSeriesSumPostRequestBody';
import {SeriesSumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSeriesSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSeriesSumPostRequestBody;
}
