import {SeriesSumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSeriesSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SeriesSumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SeriesSumPostRequestBody();
}
