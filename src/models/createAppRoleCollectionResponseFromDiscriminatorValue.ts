import {AppRoleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppRoleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppRoleCollectionResponse();
}
