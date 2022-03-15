import {SearchWithQResponse} from './searchWithQResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchWithQResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchWithQResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchWithQResponse();
}
