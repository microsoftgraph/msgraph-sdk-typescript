import {LocalizedDescriptionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedDescriptionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedDescriptionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedDescriptionCollectionResponse();
}
