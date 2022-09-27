import {LocalizedNameCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedNameCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedNameCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedNameCollectionResponse();
}
