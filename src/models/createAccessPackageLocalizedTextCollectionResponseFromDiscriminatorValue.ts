import {AccessPackageLocalizedTextCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageLocalizedTextCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageLocalizedTextCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageLocalizedTextCollectionResponse();
}
