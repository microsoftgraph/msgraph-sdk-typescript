import {ExternalConnectionCollectionResponse} from './externalConnectionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalConnectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalConnectionCollectionResponse();
}
